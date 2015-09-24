'use strict';
var util$915 = require('../../../../misc/util.js');
var Target$916 = require('./target.js');
var Targets$918 = function (upper$921, array$922) {
    this.upper = upper$921;
    this.array = array$922;
};
Targets$918.prototype.up = function () {
    return this.upper;
};
Targets$918.prototype.and = Targets$918.prototype.up;
module.exports = Targets$918;
Targets$918.prototype[util$915.camelize('total-coverage')] = function (value$923) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'total-coverage',
        Target$916,
        value$923
    ]);
};
Targets$918.prototype[util$915.camelize('code-coverage')] = function (value$924) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'code-coverage',
        Target$916,
        value$924
    ]);
};