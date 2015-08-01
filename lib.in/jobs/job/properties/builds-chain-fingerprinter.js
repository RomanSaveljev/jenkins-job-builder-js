"use strict";

var util = require('../../../misc/util.js');

var BuildsChainFingerprinter = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(BuildsChainFingerprinter.prototype, 'upper');
BuildsChainFingerprinter.prototype.perBuildsChain = util.generatePrimitiveAccessor('obj', 'per-builds-chain');
BuildsChainFingerprinter.prototype.perJobChain = util.generatePrimitiveAccessor('obj', 'per-job-chain');

module.exports = BuildsChainFingerprinter;
