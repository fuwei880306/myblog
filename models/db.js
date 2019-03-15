var settings = require('../settings'),
    mongodb = require('mongodb'),
    Db = mongodb.Db,
    Connection = mongodb.Server;
module.exports = new Db(settings.db, new Server(settings.host, settings.port), {safe: true});