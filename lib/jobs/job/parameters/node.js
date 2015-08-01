'use strict';
var util$890 = require('../../../misc/util.js');
var Node$892 = function (upper$899, obj$900) {
    this.upper = upper$899;
    this.obj = obj$900;
};
Node$892.prototype.up = function () {
    return this.upper;
};
Node$892.prototype.and = Node$892.prototype.up;
module.exports = Node$892;
Node$892.prototype[util$890.camelize('name')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$901
    ]);
};
Node$892.prototype[util$890.camelize('description')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'description',
        value$902
    ]);
};
Node$892.prototype[util$890.camelize('default-nodes')] = function (value$903) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'default-nodes',
        value$903
    ]);
};
Node$892.prototype[util$890.camelize('allowed-slaves')] = function (value$904) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'allowed-slaves',
        value$904
    ]);
};
Node$892.prototype[util$890.camelize('ignore-offline-nodes')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'ignore-offline-nodes',
        value$905
    ]);
};
Node$892.prototype[util$890.camelize('allowed-multiselect')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'allowed-multiselect',
        value$906
    ]);
};