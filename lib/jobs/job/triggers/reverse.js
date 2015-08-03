'use strict';
var util$890 = require('../../../misc/util.js');
var Reverse$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Reverse$892.prototype.up = function () {
    return this.upper;
};
Reverse$892.prototype.and = Reverse$892.prototype.up;
module.exports = Reverse$892;
Reverse$892.prototype[util$890.camelize('jobs')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'jobs',
        value$897
    ]);
};
Reverse$892.prototype[util$890.camelize('result')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'result',
        value$898
    ]);
};