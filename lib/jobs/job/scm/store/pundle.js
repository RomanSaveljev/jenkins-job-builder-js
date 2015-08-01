'use strict';
var util$890 = require('../../../../misc/util.js');
var Pundle$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Pundle$892.prototype.up = function () {
    return this.upper;
};
Pundle$892.prototype.and = Pundle$892.prototype.up;
module.exports = Pundle$892;
Pundle$892.prototype[util$890.camelize('package')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'package',
        value$897
    ]);
};
Pundle$892.prototype[util$890.camelize('bundle')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'bundle',
        value$898
    ]);
};