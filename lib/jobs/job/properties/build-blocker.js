'use strict';
var util$915 = require('../../../misc/util.js');
var BuildBlocker$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
BuildBlocker$917.prototype.up = function () {
    return this.upper;
};
BuildBlocker$917.prototype.and = BuildBlocker$917.prototype.up;
module.exports = BuildBlocker$917;
BuildBlocker$917.prototype[util$915.camelize('use-build-blocker')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'use-build-blocker',
        value$922
    ]);
};
BuildBlocker$917.prototype[util$915.camelize('blocking-jobs')] = function (value$923) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'blocking-jobs',
        value$923
    ]);
};