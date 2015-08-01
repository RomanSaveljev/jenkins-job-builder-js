'use strict';
var util$890 = require('../../../misc/util.js');
var JobPassword$891 = require('./inject-passwords/job-password.js');
var InjectPasswords$893 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
InjectPasswords$893.prototype.up = function () {
    return this.upper;
};
InjectPasswords$893.prototype.and = InjectPasswords$893.prototype.up;
module.exports = InjectPasswords$893;
InjectPasswords$893.prototype[util$890.camelize('global')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'global',
        value$899
    ]);
};
InjectPasswords$893.prototype[util$890.camelize('mask-password-params')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'mask-password-params',
        value$900
    ]);
};
InjectPasswords$893.prototype[util$890.camelize('job-passwords')] = function (value$901) {
    return util$890.objectArrayAccessor.apply(this, [
        'job-passwords',
        JobPassword$891,
        value$901
    ]);
};