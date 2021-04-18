let CityService = require("../services/city.service.js")
const cl = e => console.log(e);

/** Update images */
exports.updateImageValidation = (req, res, content) => {
    if(!req.body.code)
        return res.status(400).send({success: false, error: 'code._blank'});
    return CityService.updateImage(req, res, content)
};

/** Get the photo path that i have to integrate in an img src */
exports.getPath = async (req, res) => {
    return CityService.getPath(req, res)
};

/** Get all cities name with their paths */
exports.getCities = async (req, res) => {
    return CityService.findAll(req, res)
};
