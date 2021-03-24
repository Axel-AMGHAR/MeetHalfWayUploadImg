var DataTypes = require("sequelize").DataTypes;
var _cities = require("./cities");
var _mhw_city = require("./city.model");

function initModels(sequelize) {
  var cities = _cities(sequelize, DataTypes);
  var mhw_city = _mhw_city(sequelize, DataTypes);


  return {
    cities,
    mhw_city,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
