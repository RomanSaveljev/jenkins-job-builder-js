'use strict';
var util$890 = require('../../../misc/util.js');
var Ownership$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Ownership$892.prototype.up = function () {
    return this.upper;
};
Ownership$892.prototype.and = Ownership$892.prototype.up;
module.exports = Ownership$892;
Ownership$892.prototype[util$890.camelize('enabled')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'enabled',
        value$898
    ]);
};
Ownership$892.prototype[util$890.camelize('owner')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'owner',
        value$899
    ]);
};
Ownership$892.prototype[util$890.camelize('co-owners')] = function (value$900) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'co-owners',
        value$900
    ]);
};