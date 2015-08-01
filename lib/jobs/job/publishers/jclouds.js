'use strict';
var util$890 = require('../../../misc/util.js');
var Jclouds$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
Jclouds$892.prototype.up = function () {
    return this.upper;
};
Jclouds$892.prototype.and = Jclouds$892.prototype.up;
module.exports = Jclouds$892;
Jclouds$892.prototype[util$890.camelize('profile')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'profile',
        value$900
    ]);
};
Jclouds$892.prototype[util$890.camelize('files')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'files',
        value$901
    ]);
};
Jclouds$892.prototype[util$890.camelize('basedir')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'basedir',
        value$902
    ]);
};
Jclouds$892.prototype[util$890.camelize('container')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'container',
        value$903
    ]);
};
Jclouds$892.prototype[util$890.camelize('hierarchy')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'hierarchy',
        value$904
    ]);
};