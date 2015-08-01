'use strict';
var util$690 = require('../../../misc/util.js');
var Axis$692 = function (upper$696, obj$697) {
    this.upper = upper$696;
    this.obj = obj$697;
};
Axis$692.prototype.up = function () {
    return this.upper;
};
Axis$692.prototype.and = Axis$692.prototype.up;
module.exports = Axis$692;
Axis$692.prototype[util$690.camelize('type')] = function (value$698) {
    return util$690.primitiveAccessor.apply(this, [
        'type',
        value$698
    ]);
};
Axis$692.prototype[util$690.camelize('name')] = function (value$699) {
    return util$690.primitiveAccessor.apply(this, [
        'name',
        value$699
    ]);
};
Axis$692.prototype[util$690.camelize('values')] = function (value$700) {
    return util$690.primitiveArrayAccessor.apply(this, [
        'values',
        value$700
    ]);
};