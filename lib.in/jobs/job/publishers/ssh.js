"use strict";

var util = require('../../../misc/util.js');

var Ssh = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Ssh.prototype, 'upper');
Ssh.prototype.site = util.generatePrimitiveAccessor('obj', 'site');
Ssh.prototype.target = util.generatePrimitiveAccessor('obj', 'target');
Ssh.prototype.targetIsDateFormat = util.generatePrimitiveAccessor('obj', 'target-is-date-format');
Ssh.prototype.cleanRemote = util.generatePrimitiveAccessor('obj', 'clean-remote');
Ssh.prototype.source = util.generatePrimitiveAccessor('obj', 'source');
Ssh.prototype.command = util.generatePrimitiveAccessor('obj', 'command');
Ssh.prototype.timeout = util.generatePrimitiveAccessor('obj', 'timeout');
Ssh.prototype.usePty = util.generatePrimitiveAccessor('obj', 'use-pty');
Ssh.prototype.excludes = util.generatePrimitiveAccessor('obj', 'excludes');
Ssh.prototype.removePrefix = util.generatePrimitiveAccessor('obj', 'remove-prefix');
Ssh.prototype.failOnError = util.generatePrimitiveAccessor('obj', 'fail-on-error');
Ssh.prototype.alwaysPublishFromMaster = util.generatePrimitiveAccessor('obj', 'always-publish-from-master');
Ssh.prototype.flatten = util.generatePrimitiveAccessor('obj', 'flatten');

module.exports = Ssh;
