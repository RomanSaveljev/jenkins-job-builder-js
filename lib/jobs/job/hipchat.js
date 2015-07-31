"use strict";

var util = require('../../misc/util.js');

var HipChat = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(HipChat.prototype, 'upper');
HipChat.prototype.enabled = util.generatePrimitiveAccessor('obj', 'enabled');
HipChat.prototype.rooms = util.generatePrimitiveArrayAccessor('obj', 'rooms');
HipChat.prototype.notifyStart = util.generatePrimitiveArrayAccessor('obj', 'notify-start');
HipChat.prototype.notifySuccess = util.generatePrimitiveArrayAccessor('obj', 'notify-success');
HipChat.prototype.notifyAborted = util.generatePrimitiveArrayAccessor('obj', 'notify-aborted');
HipChat.prototype.notifyNotBuilt = util.generatePrimitiveArrayAccessor('obj', 'notify-not-built');
HipChat.prototype.notifyUnstable = util.generatePrimitiveArrayAccessor('obj', 'notify-unstable');
HipChat.prototype.notifyFailure = util.generatePrimitiveArrayAccessor('obj', 'notify-failure');
HipChat.prototype.notifyBackToNormal = util.generatePrimitiveArrayAccessor('obj', 'notify-back-to-normal');

module.exports = HipChat;
