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
Targets$918.prototype[util$915.camelize('instruction')] = function (value$927) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'instruction',
        Target$916,
        value$927
    ]);
};
Targets$918.prototype[util$915.camelize('branch')] = function (value$928) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'branch',
        Target$916,
        value$928
    ]);
};
Targets$918.prototype[util$915.camelize('complexity')] = function (value$929) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'complexity',
        Target$916,
        value$929
    ]);
};
Targets$918.prototype[util$915.camelize('line')] = function (value$930) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'line',
        Target$916,
        value$930
    ]);
};
Targets$918.prototype[util$915.camelize('method')] = function (value$931) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'method',
        Target$916,
        value$931
    ]);
};
Targets$918.prototype[util$915.camelize('class')] = function (value$932) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'class',
        Target$916,
        value$932
    ]);
};