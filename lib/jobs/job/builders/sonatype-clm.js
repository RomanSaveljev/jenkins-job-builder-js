'use strict';
var util$890 = require('../../../misc/util.js');
var SonatypeClm$892 = function (upper$899, obj$900) {
    this.upper = upper$899;
    this.obj = obj$900;
};
SonatypeClm$892.prototype.up = function () {
    return this.upper;
};
SonatypeClm$892.prototype.and = SonatypeClm$892.prototype.up;
module.exports = SonatypeClm$892;
SonatypeClm$892.prototype[util$890.camelize('application-name')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'application-name',
        value$901
    ]);
};
SonatypeClm$892.prototype[util$890.camelize('fail-on-clm-server-failure')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-on-clm-server-failure',
        value$902
    ]);
};
SonatypeClm$892.prototype[util$890.camelize('stage')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'stage',
        value$903
    ]);
};
SonatypeClm$892.prototype[util$890.camelize('scan-targets')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'scan-targets',
        value$904
    ]);
};
SonatypeClm$892.prototype[util$890.camelize('module-excludes')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'module-excludes',
        value$905
    ]);
};
SonatypeClm$892.prototype[util$890.camelize('advanced-options')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'advanced-options',
        value$906
    ]);
};