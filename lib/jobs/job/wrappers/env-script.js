'use strict';
var util$890 = require('../../../misc/util.js');
var EnvScript$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
EnvScript$892.prototype.up = function () {
    return this.upper;
};
EnvScript$892.prototype.and = EnvScript$892.prototype.up;
module.exports = EnvScript$892;
EnvScript$892.prototype[util$890.camelize('script-content')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'script-content',
        value$897
    ]);
};
EnvScript$892.prototype[util$890.camelize('only-run-on-parent')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'only-run-on-parent',
        value$898
    ]);
};