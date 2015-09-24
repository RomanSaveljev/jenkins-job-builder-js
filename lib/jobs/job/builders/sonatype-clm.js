'use strict';
var util$915 = require('../../../misc/util.js');
var SonatypeClm$917 = function (upper$924, obj$925) {
    this.upper = upper$924;
    this.obj = obj$925;
};
SonatypeClm$917.prototype.up = function () {
    return this.upper;
};
SonatypeClm$917.prototype.and = SonatypeClm$917.prototype.up;
module.exports = SonatypeClm$917;
SonatypeClm$917.prototype[util$915.camelize('application-name')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'application-name',
        value$926
    ]);
};
SonatypeClm$917.prototype[util$915.camelize('fail-on-clm-server-failure')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-on-clm-server-failure',
        value$927
    ]);
};
SonatypeClm$917.prototype[util$915.camelize('stage')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'stage',
        value$928
    ]);
};
SonatypeClm$917.prototype[util$915.camelize('scan-targets')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'scan-targets',
        value$929
    ]);
};
SonatypeClm$917.prototype[util$915.camelize('module-excludes')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'module-excludes',
        value$930
    ]);
};
SonatypeClm$917.prototype[util$915.camelize('advanced-options')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'advanced-options',
        value$931
    ]);
};