const BaseDatabase = require('./base-database');
const Driver = require('../driver');


class DriverDatabase extends BaseDatabase {

}


module.exports = new DriverDatabase(Driver);    