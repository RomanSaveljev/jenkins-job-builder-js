'use strict';
var util$915 = require('../../../misc/util.js');
var LogParser$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
LogParser$917.prototype.up = function () {
    return this.upper;
};
LogParser$917.prototype.and = LogParser$917.prototype.up;
module.exports = LogParser$917;
LogParser$917.prototype[util$915.camelize('parse-rules')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'parse-rules',
        value$923
    ]);
};
LogParser$917.prototype[util$915.camelize('unstable-on-warning')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable-on-warning',
        value$924
    ]);
};
LogParser$917.prototype[util$915.camelize('fail-on-error')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-on-error',
        value$925
    ]);
};