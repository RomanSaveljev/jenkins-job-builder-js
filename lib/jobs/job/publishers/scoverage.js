'use strict';
var util$890 = require('../../../misc/util.js');
var Scoverage$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Scoverage$892.prototype.up = function () {
    return this.upper;
};
Scoverage$892.prototype.and = Scoverage$892.prototype.up;
module.exports = Scoverage$892;
Scoverage$892.prototype[util$890.camelize('report-directory')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'report-directory',
        value$897
    ]);
};
Scoverage$892.prototype[util$890.camelize('report-file')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'report-file',
        value$898
    ]);
};