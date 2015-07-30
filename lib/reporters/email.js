"use strict";

var util = require('../util.js');

var Email = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Email.prototype, 'upper');
Email.prototype.recipients = util.generatePrimitiveAccessor('obj', 'recipients');
Email.prototype.notifyEveryUnstableBuild = util.generatePrimitiveAccessor('obj', 'notify-every-unstable-build');
Email.prototype.sendToIndividuals = util.generatePrimitiveAccessor('obj', 'send-to-individuals');

module.exports = Email;
