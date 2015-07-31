"use strict";

var util = require('../util.js');

var BuildPublisher = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(BuildPublisher.prototype, 'upper');
BuildPublisher.prototype.publishUnstableBuilds = util.generatePrimitiveAccessor('obj', 'publish-unstable-builds');
BuildPublisher.prototype.publishFailedBuilds = util.generatePrimitiveAccessor('obj', 'publish-failed-builds');
BuildPublisher.prototype.daysToKeep = util.generatePrimitiveAccessor('obj', 'days-to-keep');
BuildPublisher.prototype.numToKeep = util.generatePrimitiveAccessor('obj', 'num-to-keep');

module.exports = BuildPublisher;
