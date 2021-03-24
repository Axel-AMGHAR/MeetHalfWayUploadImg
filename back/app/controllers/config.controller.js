const cl = e => console.log(e);
const db = require("../models/db.js");

exports.sendCredentials = async (req, res) => {
    let body = req.body;
    if(await db.is_authenticated())
        return res.status(400).send({success: false, message: 'Already authenticated'})

    /* New sequelize instance */
    db.new_authentication(body.database || 'postgres', body.username || 'postgres', body.password, body.host || 'localhost', body.dialect || 'postgres')
        .then(_ => res.send({success: true, message: 'connected'}))
        .catch(err => res.send({ success: false, err: 'credentials error(s)', err_message: err}))

};

exports.is_authenticated = async (req, res) => {
    return res.send({is_authenticated: await db.is_authenticated()})
}

exports.logout = async (req, res) => {
    if(!(await db.is_authenticated()))
        return res.status(400).send({success: false, message: 'Already unauthenticated'})

    db.sequelize_instance.close()
        .then(_ => res.status(200).send({success: true, message: 'unauthenticated successfully'}))
        .catch(err => res.status(200).send({success: true, error: err}))
}