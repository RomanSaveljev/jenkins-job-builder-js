'use strict';
var util$890 = require('../../../../../misc/util.js');
var Severity$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Severity$892.prototype.up = function () {
    return this.upper;
};
Severity$892.prototype.and = Severity$892.prototype.up;
module.exports = Severity$892;
Severity$892.prototype[util$890.camelize('error')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'error',
        value$898
    ]);
};
Severity$892.prototype[util$890.camelize('warning')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'warning',
        value$899
    ]);
};
Severity$892.prototype[util$890.camelize('information')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'information',
        value$900
    ]);
};