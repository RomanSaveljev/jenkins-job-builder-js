'use strict';
var util$890 = require('../../../../misc/util.js');
var JobPassword$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
JobPassword$892.prototype.up = function () {
    return this.upper;
};
JobPassword$892.prototype.and = JobPassword$892.prototype.up;
module.exports = JobPassword$892;
JobPassword$892.prototype[util$890.camelize('name')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$897
    ]);
};
JobPassword$892.prototype[util$890.camelize('password')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'password',
        value$898
    ]);
};