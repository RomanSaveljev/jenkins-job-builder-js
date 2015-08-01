'use strict';
var util$890 = require('../../../misc/util.js');
var MongoDb$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
MongoDb$892.prototype.up = function () {
    return this.upper;
};
MongoDb$892.prototype.and = MongoDb$892.prototype.up;
module.exports = MongoDb$892;
MongoDb$892.prototype[util$890.camelize('name')] = function (value$900) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'name',
        value$900
    ]);
};
MongoDb$892.prototype[util$890.camelize('data-directory')] = function (value$901) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'data-directory',
        value$901
    ]);
};
MongoDb$892.prototype[util$890.camelize('port')] = function (value$902) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'port',
        value$902
    ]);
};
MongoDb$892.prototype[util$890.camelize('startup-params')] = function (value$903) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'startup-params',
        value$903
    ]);
};
MongoDb$892.prototype[util$890.camelize('start-timeout')] = function (value$904) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'start-timeout',
        value$904
    ]);
};