'use strict';
var util$915 = require('../../../misc/util.js');
var SBT$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
SBT$917.prototype.up = function () {
    return this.upper;
};
SBT$917.prototype.and = SBT$917.prototype.up;
module.exports = SBT$917;
SBT$917.prototype[util$915.camelize('name')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$925
    ]);
};
SBT$917.prototype[util$915.camelize('jvm-flags')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'jvm-flags',
        value$926
    ]);
};
SBT$917.prototype[util$915.camelize('actions')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'actions',
        value$927
    ]);
};
SBT$917.prototype[util$915.camelize('sbt-flags')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'sbt-flags',
        value$928
    ]);
};
SBT$917.prototype[util$915.camelize('subdir-path')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'subdir-path',
        value$929
    ]);
};