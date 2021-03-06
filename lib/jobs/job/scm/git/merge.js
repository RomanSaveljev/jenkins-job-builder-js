'use strict';
var util$940 = require('../../../../misc/util.js');
var Merge$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
Merge$942.prototype.up = function () {
    return this.upper;
};
Merge$942.prototype.and = Merge$942.prototype.up;
module.exports = Merge$942;
Merge$942.prototype[util$940.camelize('remote')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'remote',
        value$949
    ]);
};
Merge$942.prototype[util$940.camelize('branch')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'branch',
        value$950
    ]);
};
Merge$942.prototype[util$940.camelize('strategy')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'strategy',
        value$951
    ]);
};
Merge$942.prototype[util$940.camelize('fast-forward-mode')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'fast-forward-mode',
        value$952
    ]);
};