"use strict";

var util = require('../../util.js');

var Channel = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Channel.prototype, 'upper');
Channel.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Channel.prototype.password = util.generatePrimitiveAccessor('obj', 'password');
Channel.prototype.notifyOnly = util.generatePrimitiveAccessor('obj', 'notify-only');

module.exports = Channel;
