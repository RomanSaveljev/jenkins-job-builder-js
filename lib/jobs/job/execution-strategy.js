'use strict';
var util$890 = require('../../misc/util.js');
var Touchstone$891 = require('./execution-strategy/touchstone.js');
var ExecutionStrategy$893 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
ExecutionStrategy$893.prototype.up = function () {
    return this.upper;
};
ExecutionStrategy$893.prototype.and = ExecutionStrategy$893.prototype.up;
module.exports = ExecutionStrategy$893;
ExecutionStrategy$893.prototype[util$890.camelize('combination-filter')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'combination-filter',
        value$899
    ]);
};
ExecutionStrategy$893.prototype[util$890.camelize('sequential')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'sequential',
        value$900
    ]);
};
ExecutionStrategy$893.prototype[util$890.camelize('touchstone')] = function (value$901) {
    return util$890.objectAccessor.apply(this, [
        'touchstone',
        Touchstone$891,
        value$901
    ]);
};