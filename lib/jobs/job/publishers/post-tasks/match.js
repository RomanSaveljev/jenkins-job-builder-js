'use strict';
var util$890 = require('../../../../misc/util.js');
var Match$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Match$892.prototype.up = function () {
    return this.upper;
};
Match$892.prototype.and = Match$892.prototype.up;
module.exports = Match$892;
Match$892.prototype[util$890.camelize('log-text')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'log-text',
        value$897
    ]);
};
Match$892.prototype[util$890.camelize('operator')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'operator',
        value$898
    ]);
};