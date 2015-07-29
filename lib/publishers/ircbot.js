"use strict";

var util = require('../util.js');
var Channel = require('./ircbot/channel.js');

var IrcBot = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(IrcBot.prototype, 'upper');
IrcBot.prototype.strategy = util.generatePrimitiveAccessor('obj', 'strategy');
IrcBot.prototype.notifyStart = util.generatePrimitiveAccessor('obj', 'notify-start');
IrcBot.prototype.notifyCommitters = util.generatePrimitiveAccessor('obj', 'notify-committers');
IrcBot.prototype.notifyCulprits = util.generatePrimitiveAccessor('obj', 'notify-culprits');
IrcBot.prototype.notifyUpstream = util.generatePrimitiveAccessor('obj', 'notify-upstream');
IrcBot.prototype.notifyFixers = util.generatePrimitiveAccessor('obj', 'notify-fixers');
IrcBot.prototype.messageType = util.generatePrimitiveAccessor('obj', 'message-type');
IrcBot.prototype.channels = util.generateObjectArrayAccessor('obj', 'artifacts', Channel);
IrcBot.prototype.matrixNotifier = util.generatePrimitiveAccessor('obj', 'matrix-notifier');

module.exports = IrcBot;
