'use strict';
var util$890 = require('../../../../misc/util.js');
var Redis$892 = function (upper$899, obj$900) {
    this.upper = upper$899;
    this.obj = obj$900;
};
Redis$892.prototype.up = function () {
    return this.upper;
};
Redis$892.prototype.and = Redis$892.prototype.up;
module.exports = Redis$892;
Redis$892.prototype[util$890.camelize('host')] = function (value$901) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'host',
        value$901
    ]);
};
Redis$892.prototype[util$890.camelize('port')] = function (value$902) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'port',
        value$902
    ]);
};
Redis$892.prototype[util$890.camelize('database-number')] = function (value$903) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'database-number',
        value$903
    ]);
};
Redis$892.prototype[util$890.camelize('database-password')] = function (value$904) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'database-password',
        value$904
    ]);
};
Redis$892.prototype[util$890.camelize('data-type')] = function (value$905) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'data-type',
        value$905
    ]);
};
Redis$892.prototype[util$890.camelize('key')] = function (value$906) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'key',
        value$906
    ]);
};