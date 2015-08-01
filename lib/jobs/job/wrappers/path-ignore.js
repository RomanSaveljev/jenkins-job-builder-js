'use strict';
var util$890 = require('../../../misc/util.js');
var PathIgnore$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
PathIgnore$892.prototype.up = function () {
    return this.upper;
};
PathIgnore$892.prototype.and = PathIgnore$892.prototype.up;
module.exports = PathIgnore$892;
PathIgnore$892.prototype[util$890.camelize('ignored')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'ignored',
        value$896
    ]);
};