'use strict';
var util$890 = require('../../../../misc/util.js');
var Report$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Report$892.prototype.up = function () {
    return this.upper;
};
Report$892.prototype.and = Report$892.prototype.up;
module.exports = Report$892;
Report$892.prototype[util$890.camelize('jmeter')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'jmeter',
        value$897
    ]);
};
Report$892.prototype[util$890.camelize('junit')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'junit',
        value$898
    ]);
};