const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cities', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tag: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    default_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    photo_path_unsplash: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    img_base64: {
      type: "BYTEA",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cities',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cities_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
