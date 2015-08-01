"use strict";

var util = require('../../../misc/util.js');

var EmailExt = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(EmailExt.prototype, 'upper');
EmailExt.prototype.recipients = util.generatePrimitiveAccessor('obj', 'recipients');
EmailExt.prototype.replyTo = util.generatePrimitiveAccessor('obj', 'reply-to');
EmailExt.prototype.contentType = util.generatePrimitiveAccessor('obj', 'content-type');
EmailExt.prototype.subject = util.generatePrimitiveAccessor('obj', 'subject');
EmailExt.prototype.body = util.generatePrimitiveAccessor('obj', 'body');
EmailExt.prototype.attachBuildLog = util.generatePrimitiveAccessor('obj', 'attach-build-log');
EmailExt.prototype.attachments = util.generatePrimitiveAccessor('obj', 'attachments');
EmailExt.prototype.always = util.generatePrimitiveAccessor('obj', 'always');
EmailExt.prototype.unstable = util.generatePrimitiveAccessor('obj', 'unstable');
EmailExt.prototype.firstFailure = util.generatePrimitiveAccessor('obj', 'first-failure');
EmailExt.prototype.notBuilt = util.generatePrimitiveAccessor('obj', 'not-built');
EmailExt.prototype.aborted = util.generatePrimitiveAccessor('obj', 'aborted');
EmailExt.prototype.regression = util.generatePrimitiveAccessor('obj', 'regression');
EmailExt.prototype.failure = util.generatePrimitiveAccessor('obj', 'failure');
EmailExt.prototype.secondFailure = util.generatePrimitiveAccessor('obj', 'second-failure');
EmailExt.prototype.improvement = util.generatePrimitiveAccessor('obj', 'improvement');
EmailExt.prototype.stillFailing = util.generatePrimitiveAccessor('obj', 'still-failing');
EmailExt.prototype.success = util.generatePrimitiveAccessor('obj', 'success');
EmailExt.prototype.fixed = util.generatePrimitiveAccessor('obj', 'fixed');
EmailExt.prototype.stillUnstable = util.generatePrimitiveAccessor('obj', 'still-unstable');
EmailExt.prototype.preBuild = util.generatePrimitiveAccessor('obj', 'pre-build');
EmailExt.prototype.presendScript = util.generatePrimitiveAccessor('obj', 'presend-script');
EmailExt.prototype.saveOutput = util.generatePrimitiveAccessor('obj', 'save-output');
EmailExt.prototype.matrixTrigger = util.generatePrimitiveAccessor('obj', 'matrix-trigger');
EmailExt.prototype.sendTo = util.generatePrimitiveArrayAccessor('obj', 'send-to');

module.exports = EmailExt;
