'use strict';
var util$890 = require('../../../misc/util.js');
var ManagedScript$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
ManagedScript$892.prototype.up = function () {
    return this.upper;
};
ManagedScript$892.prototype.and = ManagedScript$892.prototype.up;
module.exports = ManagedScript$892;
ManagedScript$892.prototype[util$890.camelize('script-id')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'script-id',
        value$898
    ]);
};
ManagedScript$892.prototype[util$890.camelize('type')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'type',
        value$899
    ]);
};
ManagedScript$892.prototype[util$890.camelize('args')] = function (value$900) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'args',
        value$900
    ]);
};