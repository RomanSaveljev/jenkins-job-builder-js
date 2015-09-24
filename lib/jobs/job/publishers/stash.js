'use strict';
var util$915 = require('../../../misc/util.js');
var Stash$917 = function (upper$924, obj$925) {
    this.upper = upper$924;
    this.obj = obj$925;
};
Stash$917.prototype.up = function () {
    return this.upper;
};
Stash$917.prototype.and = Stash$917.prototype.up;
module.exports = Stash$917;
Stash$917.prototype[util$915.camelize('url')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'url',
        value$926
    ]);
};
Stash$917.prototype[util$915.camelize('username')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'username',
        value$927
    ]);
};
Stash$917.prototype[util$915.camelize('password')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'password',
        value$928
    ]);
};
Stash$917.prototype[util$915.camelize('ignore-ssl')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'ignore-ssl',
        value$929
    ]);
};
Stash$917.prototype[util$915.camelize('commit-sha1')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'commit-sha1',
        value$930
    ]);
};
Stash$917.prototype[util$915.camelize('include-build-number')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'include-build-number',
        value$931
    ]);
};