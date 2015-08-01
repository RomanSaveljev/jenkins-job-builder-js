"use strict";

var util = require('../../../misc/util.js');

var FingerPrint = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(FingerPrint.prototype, 'upper');
FingerPrint.prototype.files = util.generatePrimitiveAccessor('obj', 'files');
FingerPrint.prototype.recordArtifacts = util.generatePrimitiveAccessor('obj', 'record-artifacts');

module.exports = FingerPrint;
