"use strict";

var util = require('../util.js');

var Campfire = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Campfire.prototype, 'upper');
Campfire.prototype.subdomain = util.generatePrimitiveAccessor('obj', 'subdomain');
Campfire.prototype.token = util.generatePrimitiveAccessor('obj', 'token');
Campfire.prototype.ssl = util.generatePrimitiveAccessor('obj', 'ssl');
Campfire.prototype.room = util.generatePrimitiveAccessor('obj', 'room');

module.exports = Campfire;
