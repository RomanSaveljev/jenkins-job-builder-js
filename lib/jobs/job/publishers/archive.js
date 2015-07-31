"use strict";

var util = require('../util.js');

var Archive = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Archive.prototype, 'upper');
Archive.prototype.artifacts = util.generatePrimitiveAccessor('obj', 'artifacts');
Archive.prototype.excludes = util.generatePrimitiveAccessor('obj', 'excludes');
Archive.prototype.latestOnly = util.generatePrimitiveAccessor('obj', 'latest-only');
Archive.prototype.allowEmpty = util.generatePrimitiveAccessor('obj', 'allow-empty');
Archive.prototype.fingerprint = util.generatePrimitiveAccessor('obj', 'fingerprint');

module.exports = Archive;
