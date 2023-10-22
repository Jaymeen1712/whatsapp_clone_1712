const _ = require("lodash");
const config = require("./backend-config");
const seviceConfiguration = require("./service-configuration");
const socketConfig = require("./socket-config");

module.exports = _.assign(config, seviceConfiguration, socketConfig);
