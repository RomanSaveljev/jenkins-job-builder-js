'use strict';
var util$915 = require('../../../misc/util.js');
var Repo$917 = function (upper$929, obj$930) {
    this.upper = upper$929;
    this.obj = obj$930;
};
Repo$917.prototype.up = function () {
    return this.upper;
};
Repo$917.prototype.and = Repo$917.prototype.up;
module.exports = Repo$917;
Repo$917.prototype[util$915.camelize('manifest-url')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'manifest-url',
        value$931
    ]);
};
Repo$917.prototype[util$915.camelize('manifest-branch')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'manifest-branch',
        value$932
    ]);
};
Repo$917.prototype[util$915.camelize('manifest-file')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'manifest-file',
        value$933
    ]);
};
Repo$917.prototype[util$915.camelize('manifest-group')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'manifest-group',
        value$934
    ]);
};
Repo$917.prototype[util$915.camelize('destination-dir')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'destination-dir',
        value$935
    ]);
};
Repo$917.prototype[util$915.camelize('repo-url')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'repo-url',
        value$936
    ]);
};
Repo$917.prototype[util$915.camelize('mirror-dir')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'mirror-dir',
        value$937
    ]);
};
Repo$917.prototype[util$915.camelize('jobs')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'jobs',
        value$938
    ]);
};
Repo$917.prototype[util$915.camelize('current-branch')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'current-branch',
        value$939
    ]);
};
Repo$917.prototype[util$915.camelize('quiet')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'quiet',
        value$940
    ]);
};
Repo$917.prototype[util$915.camelize('local-manifest')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'local-manifest',
        value$941
    ]);
};