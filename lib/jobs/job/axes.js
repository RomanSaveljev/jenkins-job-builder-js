'use strict';
var util$915 = require('../../misc/util.js');
var Axis$916 = require('./axes/axis.js');
var Axes$918 = function (upper$920, array$921) {
    this.upper = upper$920;
    this.array = array$921;
};
Axes$918.prototype.up = function () {
    return this.upper;
};
Axes$918.prototype.and = Axes$918.prototype.up;
module.exports = Axes$918;
Axes$918.prototype[util$915.camelize('axis')] = function (value$922) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'axis',
        Axis$916,
        value$922
    ]);
};