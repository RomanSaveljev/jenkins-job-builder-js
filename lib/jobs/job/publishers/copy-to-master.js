'use strict';
var util$890 = require('../../../misc/util.js');
var CopyToMaster$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
CopyToMaster$892.prototype.up = function () {
    return this.upper;
};
CopyToMaster$892.prototype.and = CopyToMaster$892.prototype.up;
module.exports = CopyToMaster$892;
CopyToMaster$892.prototype[util$890.camelize('includes')] = function (value$898) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'includes',
        value$898
    ]);
};
CopyToMaster$892.prototype[util$890.camelize('excludes')] = function (value$899) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'excludes',
        value$899
    ]);
};
CopyToMaster$892.prototype[util$890.camelize('destination')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'destination',
        value$900
    ]);
};