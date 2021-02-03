module.exports = (sequelize, Sequelize) =>
    sequelize.define("cities", {
        tag: {
            type: Sequelize.STRING
        },
        default_path: {
            type: Sequelize.STRING
        },
        photo_path_unsplash: {
            type: Sequelize.STRING
        },
        img_base64: {
            type: Sequelize.BLOB
        }
    })