'use strict';
var util$915 = require('../../../../misc/util.js');
var Instance$916 = require('./instance.js');
var Instances$918 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
Instances$918.prototype.up = function () {
    return this.upper;
};
Instances$918.prototype.and = Instances$918.prototype.up;
module.exports = Instances$918;
Instances$918.prototype.build = util$915.generateCustomKeyObjectElementAccessor('obj', Instance$916);