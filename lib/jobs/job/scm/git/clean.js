'use strict';
var util$940 = require('../../../../misc/util.js');
var Clean$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Clean$942.prototype.up = function () {
    return this.upper;
};
Clean$942.prototype.and = Clean$942.prototype.up;
module.exports = Clean$942;
Clean$942.prototype[util$940.camelize('after')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'after',
        value$947
    ]);
};
Clean$942.prototype[util$940.camelize('before')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'before',
        value$948
    ]);
};