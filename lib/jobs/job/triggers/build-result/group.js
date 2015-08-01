'use strict';
var util$890 = require('../../../../misc/util.js');
var Group$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Group$892.prototype.up = function () {
    return this.upper;
};
Group$892.prototype.and = Group$892.prototype.up;
module.exports = Group$892;
Group$892.prototype[util$890.camelize('jobs')] = function (value$897) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'jobs',
        value$897
    ]);
};
Group$892.prototype[util$890.camelize('results')] = function (value$898) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'results',
        value$898
    ]);
};