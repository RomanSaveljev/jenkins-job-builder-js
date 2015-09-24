'use strict';
var util$915 = require('../../../misc/util.js');
var BuildsChainFingerprinter$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
BuildsChainFingerprinter$917.prototype.up = function () {
    return this.upper;
};
BuildsChainFingerprinter$917.prototype.and = BuildsChainFingerprinter$917.prototype.up;
module.exports = BuildsChainFingerprinter$917;
BuildsChainFingerprinter$917.prototype[util$915.camelize('per-builds-chain')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'per-builds-chain',
        value$922
    ]);
};
BuildsChainFingerprinter$917.prototype[util$915.camelize('per-job-chain')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'per-job-chain',
        value$923
    ]);
};