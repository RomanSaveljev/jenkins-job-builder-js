'use strict';
var util$890 = require('../../../misc/util.js');
var ChangeAssemblyVersion$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
ChangeAssemblyVersion$892.prototype.up = function () {
    return this.upper;
};
ChangeAssemblyVersion$892.prototype.and = ChangeAssemblyVersion$892.prototype.up;
module.exports = ChangeAssemblyVersion$892;
ChangeAssemblyVersion$892.prototype[util$890.camelize('version')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'version',
        value$897
    ]);
};
ChangeAssemblyVersion$892.prototype[util$890.camelize('assembly-file')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'assembly-file',
        value$898
    ]);
};