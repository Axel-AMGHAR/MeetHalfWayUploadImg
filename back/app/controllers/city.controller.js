const axios = require("axios").default;
const db = require("../models");
const City = db.cities;

const cl = e => console.log(e)

/** SEEDER */
exports.initCreate = (req, res) => {
    // Create a City
    let codes_city = ['Q191396', 'Q6625', 'Q47465','Q181955', 'Q193183', 'Q41604', 'Q38380'];

    codes_city.forEach(code => {
        const city = {
            tag: code,
        };
        City.create(city)
    });
    res.send({success: true})
};

const city_exist = code => {
    return City.findOne({
        where: {
            'tag': code
        }
    })
};

/** When i choose un unsplash photo */
exports.updateUnsplashPath = async (req, res) => {

    if(!req.body.code)
        return res.send({success: false, error: 'code._blank'});
    else if (!(await city_exist(req.body.code)))
        return res.send({success: false, error: 'code._notFound'});
    else{
        City.update({ photo_path_unsplash: req.body.unsplash_url }, {
            where: {
                'tag':  req.body.code
            }
        });
        return res.send({success: true})
    }
};


/** When i choose a file from the PC */
exports.updateLocalPath = async (req, res) => {
    if(!req.body.code)
        return res.send({success: false, error: 'code._blank'});
    else if (!(await city_exist(req.body.code)))
        return res.send({success: false, error: 'code._notFound'});
    else{

        City.update({ img_base64: req.body.base64_img_local }, {
            where: {
                'tag':  req.body.code
            }
        });

        return res.send({success: true})
    }
};

/** Get the photo path that i have to intergate in an img src*/
exports.getPath = async (req, res) => {

    const code = req.params.code;

    if(!code)
        return res.send({success: false, error: 'code._blank'});
    else if (!(await city_exist(code)))
        return res.send({success: false, error: 'code._notFound'});

    const city = await City.findOne({
        where: {
            'tag': code
        }
    });

    if(Boolean(city.img_base64))
        return res.send(city.img_base64)

    if(Boolean(city.photo_path_unsplash))
        return res.send(city.photo_path_unsplash)

    if(!Boolean(city.default_path)){
        const response = await axios.get('https://www.wikidata.org/w/api.php?format=json&action=wbgetclaims&property=P18&entity='+ code)
        await city.update({default_path: `https://commons.wikimedia.org/wiki/Special:FilePath/${response.data.claims.P18[0].mainsnak.datavalue.value}?width=320 320w`})
    }

    return res.send(city.default_path);
};
