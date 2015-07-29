"use strict";

var util = require('../../util.js');

var Channel = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Channel.prototype, 'upper');
Channel.prototype.name = util.generatePrimtiveAccessor('obj', 'name');
Channel.prototype.password = util.generatePrimtiveAccessor('obj', 'password');
Channel.prototype.notifyOnly = util.generatePrimtiveAccessor('obj', 'notify-only');

module.exports = Channel;
