"use strict";

var util = require('../util.js');

var SauceOndemand = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(SauceOndemand.prototype, 'upper');
SauceOndemand.prototype.enableSauceConnect = util.generatePrimitiveAccessor('obj', 'enable-sauce-connect');
SauceOndemand.prototype.sauceHost = util.generatePrimitiveAccessor('obj', 'sauce-host');
SauceOndemand.prototype.saucePort = util.generatePrimitiveAccessor('obj', 'sauce-port');
SauceOndemand.prototype.overrideUsername = util.generatePrimitiveAccessor('obj', 'override-username');
SauceOndemand.prototype.overrideApiAccessKey = util.generatePrimitiveAccessor('obj', 'override-api-access-key');
SauceOndemand.prototype.startingUrl = util.generatePrimitiveAccessor('obj', 'starting-url');
SauceOndemand.prototype.type = util.generatePrimitiveAccessor('obj', 'type');
SauceOndemand.prototype.platforms = util.generatePrimitiveArrayAccessor('obj', 'platforms');
SauceOndemand.prototype.launchSauceConnectOnSlave = util.generatePrimitiveAccessor('obj', 'launch-sauce-connect-on-slave');
SauceOndemand.prototype.httpsProtocol = util.generatePrimitiveAccessor('obj', 'https-protocol');
SauceOndemand.prototype.sauceConnectOptions = util.generatePrimitiveAccessor('obj', 'sauce-connect-options');

module.exports = SauceOndemand;
