"use strict";

var util = require('../util.js');

var TriggerRemote = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(TriggerRemote.prototype, 'upper');
TriggerRemote.prototype.remoteJenkinsName = util.generatePrimitiveAccessor('obj', 'remote-jenkins-name');
TriggerRemote.prototype.job = util.generatePrimitiveAccessor('obj', 'job');
TriggerRemote.prototype.shouldNotFailBuild = util.generatePrimitiveAccessor('obj', 'should-not-fail-build');
TriggerRemote.prototype.preventRemoteBuildQueue = util.generatePrimitiveAccessor('obj', 'prevent-remote-build-queue');
TriggerRemote.prototype.block = util.generatePrimitiveAccessor('obj', 'block');
TriggerRemote.prototype.pollInterval = util.generatePrimitiveAccessor('obj', 'poll-interval');
TriggerRemote.prototype.connectionRetryLimit = util.generatePrimitiveAccessor('obj', 'connection-retry-limit');
TriggerRemote.prototype.predefinedParameters = util.generatePrimitiveAccessor('obj', 'predefined-parameters');
TriggerRemote.prototype.propertyFile = util.generatePrimitiveAccessor('obj', 'property-file');

module.exports = TriggerRemote;
