const db = require("../models/db.js");
let City = db.cities;
let CityPath = db.cities_path;
const axios = require("axios").default;
const { Op } = require("sequelize");

/** Update the city model var when the connection change */
exports.update_db_cities = _ => {
    City = db.cities;
    CityPath = db.cities_path;
};

const notFound = res => {
    return res.status(400).send({success: false, error: 'city._notFound'});
}
const cityExist = async code => {
    let city = await City.findOne({
        where: {
            tags: {
                wikidata: code
            }
        }
    });

    if(!city){
        city = await City.findOne({
            where: {
                name:{
                    [Op.iLike]: code
                }
            }
        });
    }
    return city;
}

const findCityPath = uid =>
    CityPath.findOne({
        where: {
            'mhwCityUid': uid
        }
    });

const createOrUpdateCityPath = async (uid, content) => {
    let city_path = await findCityPath(uid);
    city_path === null
        ? await CityPath.create({...content, mhwCityUid : uid})
        : await city_path.update(content);
};

exports.updateImage = async function(req, res, content) {
    const code = req.body.code;
    const city = await cityExist(code);

    if(!city)
        return notFound()
    else {
        await createOrUpdateCityPath(city.uid, content);
        return res.send({success: true});
    }
};

exports.getPath = async (req, res) => {

    const code = req.params.code;
    const city = await cityExist(code);
    if (!city)
        return notFound()

    const wiki_code = city.tags.wikidata

    let city_path = await findCityPath(city.uid)
    if(city_path === null){
        const response = await axios.get('https://www.wikidata.org/w/api.php?format=json&action=wbgetclaims&property=P18&entity='+ wiki_code)
        city_path = await CityPath.create({
            default_path: `https://commons.wikimedia.org/wiki/Special:FilePath/${response.data.claims.P18[0].mainsnak.datavalue.value}?width=320 320w`,
            mhwCityUid: city.uid
        })
    }else{
        if(Boolean(city_path.img_base64))
            return res.send(city_path.img_base64)

        if(Boolean(city_path.photo_path_unsplash))
            return res.send(city_path.photo_path_unsplash)
    }
    return res.send(city_path.default_path);
};

exports.findAll = async (req, res) => {
    return res.send(await City.findAll({include: [{ model: CityPath }]}));
};
