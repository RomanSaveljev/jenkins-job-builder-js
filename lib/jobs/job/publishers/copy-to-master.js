'use strict';
var util$890 = require('../../../misc/util.js');
var CopyToMaster$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
CopyToMaster$892.prototype.up = function () {
    return this.upper;
};
CopyToMaster$892.prototype.and = CopyToMaster$892.prototype.up;
module.exports = CopyToMaster$892;
CopyToMaster$892.prototype[util$890.camelize('includes')] = function (value$897) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'includes',
        value$897
    ]);
};
CopyToMaster$892.prototype[util$890.camelize('excludes')] = function (value$898) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'excludes',
        value$898
    ]);
};