'use strict';
var util$890 = require('../../../misc/util.js');
var SlocCount$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
SlocCount$892.prototype.up = function () {
    return this.upper;
};
SlocCount$892.prototype.and = SlocCount$892.prototype.up;
module.exports = SlocCount$892;
SlocCount$892.prototype[util$890.camelize('report-files')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'report-files',
        value$897
    ]);
};
SlocCount$892.prototype[util$890.camelize('charset')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'charset',
        value$898
    ]);
};