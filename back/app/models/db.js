const db = {};
const Sequelize = require("sequelize");

db.Sequelize = Sequelize;

db.new_authentication = (database, username, password, host, dialect) => {
    const new_sequelize = new Sequelize(database, username, password, {
            host: host,
            dialect: dialect,
            operatorsAliases: 0,

            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }
    );

    return new_sequelize.authenticate()
        .then(_ => {
            db.sequelize_instance = new_sequelize
            require('../services/config.service').update_bd()
        })
        .catch(err => console.error(err));
}

db.is_authenticated = async _ => {
    if(db.sequelize_instance === undefined)
        return false;
    else {
        return await db.sequelize_instance.authenticate()
            .then(_ =>  true).catch(_ => false)
    }
}

if(process.env.NODE_ENV === 'local')
    db.new_authentication(process.env.DATABASE, process.env.USERNAME , process.env.PASSWORD, process.env.HOST, process.env.DIALECT);

module.exports = db;