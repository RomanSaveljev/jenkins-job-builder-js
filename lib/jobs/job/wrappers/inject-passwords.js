'use strict';
var util$915 = require('../../../misc/util.js');
var JobPassword$916 = require('./inject-passwords/job-password.js');
var InjectPasswords$918 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
InjectPasswords$918.prototype.up = function () {
    return this.upper;
};
InjectPasswords$918.prototype.and = InjectPasswords$918.prototype.up;
module.exports = InjectPasswords$918;
InjectPasswords$918.prototype[util$915.camelize('global')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'global',
        value$924
    ]);
};
InjectPasswords$918.prototype[util$915.camelize('mask-password-params')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'mask-password-params',
        value$925
    ]);
};
InjectPasswords$918.prototype[util$915.camelize('job-passwords')] = function (value$926) {
    return util$915.objectArrayAccessor.apply(this, [
        'job-passwords',
        JobPassword$916,
        value$926
    ]);
};