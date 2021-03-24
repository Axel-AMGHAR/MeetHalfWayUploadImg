module.exports = app => {
    const router = require("express").Router();
    const {sendCredentials, is_authenticated, logout} = require("../controllers/config.controller.js");

    /* AUTHENTICATION */
    router.post("/login", sendCredentials);
    router.get("/is_authenticated", is_authenticated);
    router.post("/logout", logout);

    app.use('/api', router)
};