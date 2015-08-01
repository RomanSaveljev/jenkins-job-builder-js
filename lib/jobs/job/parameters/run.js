'use strict';
var util$890 = require('../../../misc/util.js');
var Run$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Run$892.prototype.up = function () {
    return this.upper;
};
Run$892.prototype.and = Run$892.prototype.up;
module.exports = Run$892;
Run$892.prototype[util$890.camelize('name')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$898
    ]);
};
Run$892.prototype[util$890.camelize('project-name')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'project-name',
        value$899
    ]);
};
Run$892.prototype[util$890.camelize('description')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'description',
        value$900
    ]);
};