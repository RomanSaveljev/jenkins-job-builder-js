"use strict";

var util = require('../util.js');

var Jabber = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Jabber.prototype, 'upper');
Jabber.prototype.notifyOnBuildStart = util.generatePrimitiveAccessor('obj', 'notify-on-build-start');
Jabber.prototype.notifyScmCommitters = util.generatePrimitiveAccessor('obj', 'notify-scm-committers');
Jabber.prototype.notifyScmCulprits = util.generatePrimitiveAccessor('obj', 'notify-scm-culprits');
Jabber.prototype.notifyUpstreamCommitters = util.generatePrimitiveAccessor('obj', 'notify-upstream-committers');
Jabber.prototype.notifyScmFixers = util.generatePrimitiveAccessor('obj', 'notify-scm-fixers');
Jabber.prototype.groupTargets = util.generatePrimitiveArrayAccessor('obj', 'group-targets');
Jabber.prototype.individualTargets = util.generatePrimitiveArrayAccessor('obj', 'individual-targets');
Jabber.prototype.strategy = util.generatePrimitiveAccessor('obj', 'strategy');
Jabber.prototype.message = util.generatePrimitiveAccessor('obj', 'message');

module.exports = Jabber;
