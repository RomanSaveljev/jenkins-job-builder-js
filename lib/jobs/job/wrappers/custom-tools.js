'use strict';
var util$690 = require('../../../misc/util.js');
var CustomTools$692 = function (upper$696, obj$697) {
    this.upper = upper$696;
    this.obj = obj$697;
};
CustomTools$692.prototype.up = function () {
    return this.upper;
};
CustomTools$692.prototype.and = CustomTools$692.prototype.up;
module.exports = CustomTools$692;
CustomTools$692.prototype[util$690.camelize('tools')] = function (value$698) {
    return util$690.primitiveArrayAccessor.apply(this, [
        'tools',
        value$698
    ]);
};
CustomTools$692.prototype[util$690.camelize('skip-master-install')] = function (value$699) {
    return util$690.primitiveAccessor.apply(this, [
        'skip-master-install',
        value$699
    ]);
};
CustomTools$692.prototype[util$690.camelize('convert-homes-to-upper')] = function (value$700) {
    return util$690.primitiveAccessor.apply(this, [
        'convert-homes-to-upper',
        value$700
    ]);
};
