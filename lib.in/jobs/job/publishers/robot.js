"use strict";

var util = require('../../../misc/util.js');

var Robot = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Robot.prototype, 'upper');
Robot.prototype.outputPath = util.generatePrimitiveAccessor('obj', 'output-path');
Robot.prototype.logFileLink = util.generatePrimitiveAccessor('obj', 'log-file-link');
Robot.prototype.reportHtml = util.generatePrimitiveAccessor('obj', 'report-html');
Robot.prototype.logHtml = util.generatePrimitiveAccessor('obj', 'log-html');
Robot.prototype.outputXml = util.generatePrimitiveAccessor('obj', 'output-xml');
Robot.prototype.passThreshold = util.generatePrimitiveAccessor('obj', 'pass-threshold');
Robot.prototype.unstableThreshold = util.generatePrimitiveAccessor('obj', 'unstable-threshold');
Robot.prototype.onlyCritical = util.generatePrimitiveAccessor('obj', 'only-critical');
Robot.prototype.otherFiles = util.generatePrimitiveArrayAccessor('obj', 'other-files');
Robot.prototype.archiveOutputXml = util.generatePrimitiveAccessor('obj', 'archive-output-xml');

module.exports = Robot;
