const Sequelize = require('sequelize')
const db = require("../models/db.js");

exports.update_bd = _ => {
    const {update_db_cities} = require("./city.service.js");

    let Cities = require("../models/city.model.js")(db.sequelize_instance, Sequelize);
    let Cities_path = require("../models/city_path.model.js")(db.sequelize_instance, Sequelize);
    Cities_path.belongsTo(Cities);

    db.cities = Cities;
    db.cities_path = Cities_path;
    update_db_cities();
};
