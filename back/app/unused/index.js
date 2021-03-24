const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

let Cities = require("./city.model.js")(sequelize, Sequelize);
let Cities_path = require("./city_path.model.js")(sequelize, Sequelize);
Cities_path.belongsTo(Cities);

db.cities = Cities;
db.cities_path = Cities_path;

module.exports = db;