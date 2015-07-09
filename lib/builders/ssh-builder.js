"use strict";

var util = require('../util.js');

var SshBuilder = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(SshBuilder.prototype, 'upper');
SshBuilder.prototype.sshUserIp = util.generatePrimitiveAccessor('obj', 'ssh-user-ip');
SshBuilder.prototype.command = util.generatePrimitiveAccessor('obj', 'command');

module.exports = SshBuilder;
