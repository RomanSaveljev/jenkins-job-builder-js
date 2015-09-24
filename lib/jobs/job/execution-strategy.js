'use strict';
var util$915 = require('../../misc/util.js');
var Touchstone$916 = require('./execution-strategy/touchstone.js');
var ExecutionStrategy$918 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
ExecutionStrategy$918.prototype.up = function () {
    return this.upper;
};
ExecutionStrategy$918.prototype.and = ExecutionStrategy$918.prototype.up;
module.exports = ExecutionStrategy$918;
ExecutionStrategy$918.prototype[util$915.camelize('combination-filter')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'combination-filter',
        value$924
    ]);
};
ExecutionStrategy$918.prototype[util$915.camelize('sequential')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'sequential',
        value$925
    ]);
};
ExecutionStrategy$918.prototype[util$915.camelize('touchstone')] = function (value$926) {
    return util$915.objectAccessor.apply(this, [
        'touchstone',
        Touchstone$916,
        value$926
    ]);
};