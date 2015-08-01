'use strict';
var util$890 = require('../../../misc/util.js');
var Thresholds$891 = require('./cppcheck/thresholds.js');
var CppCheck$893 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
CppCheck$893.prototype.up = function () {
    return this.upper;
};
CppCheck$893.prototype.and = CppCheck$893.prototype.up;
module.exports = CppCheck$893;
CppCheck$893.prototype[util$890.camelize('pattern')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'pattern',
        value$898
    ]);
};
CppCheck$893.prototype[util$890.camelize('thresholds')] = function (value$899) {
    return util$890.objectArrayAccessor.apply(this, [
        'thresholds',
        Thresholds$891,
        value$899
    ]);
};