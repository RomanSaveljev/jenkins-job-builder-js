'use strict';
var util$915 = require('../../../misc/util.js');
var ChangeAssemblyVersion$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
ChangeAssemblyVersion$917.prototype.up = function () {
    return this.upper;
};
ChangeAssemblyVersion$917.prototype.and = ChangeAssemblyVersion$917.prototype.up;
module.exports = ChangeAssemblyVersion$917;
ChangeAssemblyVersion$917.prototype[util$915.camelize('version')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'version',
        value$922
    ]);
};
ChangeAssemblyVersion$917.prototype[util$915.camelize('assembly-file')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'assembly-file',
        value$923
    ]);
};