'use strict';
var util$915 = require('../../../misc/util.js');
var Thresholds$916 = require('./cppcheck/thresholds.js');
var Graph$917 = require('./cppcheck/graph.js');
var CppCheck$919 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
CppCheck$919.prototype.up = function () {
    return this.upper;
};
CppCheck$919.prototype.and = CppCheck$919.prototype.up;
module.exports = CppCheck$919;
CppCheck$919.prototype[util$915.camelize('pattern')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'pattern',
        value$925
    ]);
};
CppCheck$919.prototype[util$915.camelize('thresholds')] = function (value$926) {
    return util$915.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$916,
        value$926
    ]);
};
CppCheck$919.prototype[util$915.camelize('graph')] = function (value$927) {
    return util$915.objectAccessor.apply(this, [
        'graph',
        Graph$917,
        value$927
    ]);
};