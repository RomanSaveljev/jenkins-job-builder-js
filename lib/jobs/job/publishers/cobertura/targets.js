'use strict';
var util$915 = require('../../../../misc/util.js');
var Target$916 = require('./target.js');
var Targets$918 = function (upper$925, array$926) {
    this.upper = upper$925;
    this.array = array$926;
};
Targets$918.prototype.up = function () {
    return this.upper;
};
Targets$918.prototype.and = Targets$918.prototype.up;
module.exports = Targets$918;
Targets$918.prototype[util$915.camelize('files')] = function (value$927) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'files',
        Target$916,
        value$927
    ]);
};
Targets$918.prototype[util$915.camelize('packages')] = function (value$928) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'packages',
        Target$916,
        value$928
    ]);
};
Targets$918.prototype[util$915.camelize('method')] = function (value$929) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'method',
        Target$916,
        value$929
    ]);
};
Targets$918.prototype[util$915.camelize('classes')] = function (value$930) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'classes',
        Target$916,
        value$930
    ]);
};
Targets$918.prototype[util$915.camelize('line')] = function (value$931) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'line',
        Target$916,
        value$931
    ]);
};
Targets$918.prototype[util$915.camelize('conditional')] = function (value$932) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'conditional',
        Target$916,
        value$932
    ]);
};