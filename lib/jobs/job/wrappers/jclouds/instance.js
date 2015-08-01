'use strict';
var util$890 = require('../../../../misc/util.js');
var Instance$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Instance$892.prototype.up = function () {
    return this.upper;
};
Instance$892.prototype.and = Instance$892.prototype.up;
module.exports = Instance$892;
Instance$892.prototype[util$890.camelize('cloud-name')] = function (value$898) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'cloud-name',
        value$898
    ]);
};
Instance$892.prototype[util$890.camelize('count')] = function (value$899) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'count',
        value$899
    ]);
};
Instance$892.prototype[util$890.camelize('stop-on-terminate')] = function (value$900) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'stop-on-terminate',
        value$900
    ]);
};