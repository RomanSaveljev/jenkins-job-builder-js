'use strict';
var util$890 = require('../../../misc/util.js');
var CustomTools$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
CustomTools$892.prototype.up = function () {
    return this.upper;
};
CustomTools$892.prototype.and = CustomTools$892.prototype.up;
module.exports = CustomTools$892;
CustomTools$892.prototype[util$890.camelize('tools')] = function (value$898) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'tools',
        value$898
    ]);
};
CustomTools$892.prototype[util$890.camelize('skip-master-install')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'skip-master-install',
        value$899
    ]);
};
CustomTools$892.prototype[util$890.camelize('convert-homes-to-upper')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'convert-homes-to-upper',
        value$900
    ]);
};