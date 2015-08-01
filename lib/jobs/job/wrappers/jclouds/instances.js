'use strict';
var util$890 = require('../../../../misc/util.js');
var Instance$891 = require('./instance.js');
var Instances$893 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
Instances$893.prototype.up = function () {
    return this.upper;
};
Instances$893.prototype.and = Instances$893.prototype.up;
module.exports = Instances$893;
Instances$893.prototype.build = util$890.generateCustomKeyObjectElementAccessor('obj', Instance$891);