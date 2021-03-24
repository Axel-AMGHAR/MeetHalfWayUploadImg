module.exports = app => {
    const router = require("express").Router();
    const cities = require("../controllers/city.controller.js");
    let db = require("../models/db.js")

    router.all('/*',async (req, res, next) => {
        if(!(await db.is_authenticated()))
            return res.status(400).send({status: false, err: 'Not authenticated'})
        next()
    })

    /* get photo path */
    router.get("/city_path/:code", cities.getPath);

    /* Update unspash url link */
    router.post("/city_update_unsplash_path",
        (req, res) => cities.updateImageValidation(req, res, { photo_path_unsplash: req.body.unsplash_url })
    );

    /* Update local path */
    router.post("/city_update_local_path",
        (req, res) => cities.updateImageValidation(req, res, { img_base64: req.body.img_base64 })
    );

    router.all('/*', (req, res) => {
        return res.sendStatus(404);
    })

    app.use('/api/city', router)
};