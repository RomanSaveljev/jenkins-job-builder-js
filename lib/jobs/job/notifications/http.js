"use strict";

var util = require('../util.js');

var Http = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Http.prototype, 'upper');
Http.prototype.format = util.generatePrimitiveAccessor('obj', 'format');
Http.prototype.event = util.generatePrimitiveAccessor('obj', 'event');
Http.prototype.url = util.generatePrimitiveAccessor('obj', 'url');
Http.prototype.timeout = util.generatePrimitiveAccessor('obj', 'timeout');
Http.prototype.log = util.generatePrimitiveAccessor('obj', 'log');

module.exports = Http;
