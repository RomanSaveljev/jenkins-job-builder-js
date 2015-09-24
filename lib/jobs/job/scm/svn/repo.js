'use strict';
var util$915 = require('../../../../misc/util.js');
var Repo$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
Repo$917.prototype.up = function () {
    return this.upper;
};
Repo$917.prototype.and = Repo$917.prototype.up;
module.exports = Repo$917;
Repo$917.prototype[util$915.camelize('url')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'url',
        value$925
    ]);
};
Repo$917.prototype[util$915.camelize('basedir')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'basedir',
        value$926
    ]);
};
Repo$917.prototype[util$915.camelize('credentials-id')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'credentials-id',
        value$927
    ]);
};
Repo$917.prototype[util$915.camelize('repo-depth')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'repo-depth',
        value$928
    ]);
};
Repo$917.prototype[util$915.camelize('ignore-externals')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'ignore-externals',
        value$929
    ]);
};