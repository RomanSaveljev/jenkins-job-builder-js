'use strict';
var util$890 = require('../../../misc/util.js');
var BuildsChainFingerprinter$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
BuildsChainFingerprinter$892.prototype.up = function () {
    return this.upper;
};
BuildsChainFingerprinter$892.prototype.and = BuildsChainFingerprinter$892.prototype.up;
module.exports = BuildsChainFingerprinter$892;
BuildsChainFingerprinter$892.prototype[util$890.camelize('per-builds-chain')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'per-builds-chain',
        value$897
    ]);
};
BuildsChainFingerprinter$892.prototype[util$890.camelize('per-job-chain')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'per-job-chain',
        value$898
    ]);
};