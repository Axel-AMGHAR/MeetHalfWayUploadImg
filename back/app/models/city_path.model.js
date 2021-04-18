module.exports = (sequelize, Sequelize) =>
    sequelize.define("city_path", {
        default_path: {
            type: Sequelize.STRING
        },
        photo_path_unsplash: {
            type: Sequelize.STRING
        },
        img_base64: {
            type: Sequelize.BLOB
        },
        default: {
            type: Sequelize.STRING
        }
    })