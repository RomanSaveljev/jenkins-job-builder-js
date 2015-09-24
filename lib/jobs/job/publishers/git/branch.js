'use strict';
var util$915 = require('../../../../misc/util.js');
var Branch$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Branch$917.prototype.up = function () {
    return this.upper;
};
Branch$917.prototype.and = Branch$917.prototype.up;
module.exports = Branch$917;
Branch$917.prototype[util$915.camelize('remote')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'remote',
        value$922
    ]);
};
Branch$917.prototype[util$915.camelize('name')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$923
    ]);
};