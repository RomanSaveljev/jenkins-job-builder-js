'use strict';
var util$915 = require('../../../misc/util.js');
var Junit$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
Junit$917.prototype.up = function () {
    return this.upper;
};
Junit$917.prototype.and = Junit$917.prototype.up;
module.exports = Junit$917;
Junit$917.prototype[util$915.camelize('results')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'results',
        value$925
    ]);
};
Junit$917.prototype[util$915.camelize('keep-long-stdio')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'keep-long-stdio',
        value$926
    ]);
};
Junit$917.prototype[util$915.camelize('test-stability')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'test-stability',
        value$927
    ]);
};
Junit$917.prototype[util$915.camelize('claim-build')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'claim-build',
        value$928
    ]);
};
Junit$917.prototype[util$915.camelize('measurement-plots')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'measurement-plots',
        value$929
    ]);
};