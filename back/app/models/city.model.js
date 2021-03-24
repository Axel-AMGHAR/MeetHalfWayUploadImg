const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mhw_city', {
    uid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: "mhw_city_name_key"
    },
    location: {
      type: DataTypes.GEOGRAPHY('Point', 4326),
      allowNull: true
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    country: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    high_speed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    main_lines: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    other_lines: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    important_city: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tags: {
      type: DataTypes.HSTORE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mhw_city',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mhw_city_gix",
        fields: [
          { name: "location" },
        ]
      },
      {
        name: "mhw_city_name_idx",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "mhw_city_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "mhw_city_pkey",
        unique: true,
        fields: [
          { name: "uid" },
        ]
      },
      {
        name: "mhw_city_uid_idx",
        unique: true,
        fields: [
          { name: "uid" },
        ]
      },
    ]
  });
};
