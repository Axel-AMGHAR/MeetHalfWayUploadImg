module.exports = app => {
    const cities = require("../controllers/city.controller.js");

    var router = require("express").Router();

    // Create a new City
    router.get("/init_create", cities.initCreate);

    /* get photo path */
    router.get("/city_path/:code", cities.getPath);

    /* Update unspash url link */
    router.post("/city_update_unsplash_path", cities.updateUnsplashPath);

    /* Update local path */
    router.post("/city_update_local_path", cities.updateLocalPath);

    app.use('/api', router)
};