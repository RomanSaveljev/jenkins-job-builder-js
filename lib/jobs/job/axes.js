'use strict';
var util$890 = require('../../misc/util.js');
var Axis$891 = require('./axis.js');
var Axes$893 = function (upper$895, array$896) {
    this.upper = upper$895;
    this.array = array$896;
};
Axes$893.prototype.up = function () {
    return this.upper;
};
Axes$893.prototype.and = Axes$893.prototype.up;
module.exports = Axes$893;
Axes$893.prototype[util$890.camelize('axis')] = function (value$897) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'axis',
        Axis$891,
        value$897
    ]);
};