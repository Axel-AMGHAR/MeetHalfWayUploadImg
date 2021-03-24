const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/* db.sequelize.sync({ force: false }) */
require("./app/routes/city.routes")(app);
require("./app/routes/config.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});