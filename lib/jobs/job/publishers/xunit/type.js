'use strict';
var util$915 = require('../../../../misc/util.js');
var Type$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
Type$917.prototype.up = function () {
    return this.upper;
};
Type$917.prototype.and = Type$917.prototype.up;
module.exports = Type$917;
Type$917.prototype[util$915.camelize('pattern')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'pattern',
        value$925
    ]);
};
Type$917.prototype[util$915.camelize('requireupdate')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'requireupdate',
        value$926
    ]);
};
Type$917.prototype[util$915.camelize('deleteoutput')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'deleteoutput',
        value$927
    ]);
};
Type$917.prototype[util$915.camelize('skip-if-no-test-files')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'skip-if-no-test-files',
        value$928
    ]);
};
Type$917.prototype[util$915.camelize('stoponerror')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'stoponerror',
        value$929
    ]);
};