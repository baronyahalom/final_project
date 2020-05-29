const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./hex.model.js")(mongoose);
db.opStrategy = require("./opStrategy.model.js")(mongoose);
db.part1 = require("./part1.model.js")(mongoose);

module.exports = db;
