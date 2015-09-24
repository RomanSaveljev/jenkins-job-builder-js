'use strict';
var util$915 = require('../../../misc/util.js');
var Node$917 = function (upper$924, obj$925) {
    this.upper = upper$924;
    this.obj = obj$925;
};
Node$917.prototype.up = function () {
    return this.upper;
};
Node$917.prototype.and = Node$917.prototype.up;
module.exports = Node$917;
Node$917.prototype[util$915.camelize('name')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$926
    ]);
};
Node$917.prototype[util$915.camelize('description')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'description',
        value$927
    ]);
};
Node$917.prototype[util$915.camelize('default-nodes')] = function (value$928) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'default-nodes',
        value$928
    ]);
};
Node$917.prototype[util$915.camelize('allowed-slaves')] = function (value$929) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'allowed-slaves',
        value$929
    ]);
};
Node$917.prototype[util$915.camelize('ignore-offline-nodes')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'ignore-offline-nodes',
        value$930
    ]);
};
Node$917.prototype[util$915.camelize('allowed-multiselect')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'allowed-multiselect',
        value$931
    ]);
};