'use strict';
var util$890 = require('../../../misc/util.js');
var Thresholds$891 = require('./cppcheck/thresholds.js');
var Graph$892 = require('./cppcheck/graph.js');
var CppCheck$894 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
CppCheck$894.prototype.up = function () {
    return this.upper;
};
CppCheck$894.prototype.and = CppCheck$894.prototype.up;
module.exports = CppCheck$894;
CppCheck$894.prototype[util$890.camelize('pattern')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'pattern',
        value$900
    ]);
};
CppCheck$894.prototype[util$890.camelize('thresholds')] = function (value$901) {
    return util$890.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$891,
        value$901
    ]);
};
CppCheck$894.prototype[util$890.camelize('graph')] = function (value$902) {
    return util$890.objectAccessor.apply(this, [
        'graph',
        Graph$892,
        value$902
    ]);
};