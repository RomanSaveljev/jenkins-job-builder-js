'use strict';
var util$890 = require('../../../misc/util.js');
var Repo$892 = function (upper$904, obj$905) {
    this.upper = upper$904;
    this.obj = obj$905;
};
Repo$892.prototype.up = function () {
    return this.upper;
};
Repo$892.prototype.and = Repo$892.prototype.up;
module.exports = Repo$892;
Repo$892.prototype[util$890.camelize('manifest-url')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'manifest-url',
        value$906
    ]);
};
Repo$892.prototype[util$890.camelize('manifest-branch')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'manifest-branch',
        value$907
    ]);
};
Repo$892.prototype[util$890.camelize('manifest-file')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'manifest-file',
        value$908
    ]);
};
Repo$892.prototype[util$890.camelize('manifest-group')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'manifest-group',
        value$909
    ]);
};
Repo$892.prototype[util$890.camelize('destination-dir')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'destination-dir',
        value$910
    ]);
};
Repo$892.prototype[util$890.camelize('repo-url')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'repo-url',
        value$911
    ]);
};
Repo$892.prototype[util$890.camelize('mirror-dir')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'mirror-dir',
        value$912
    ]);
};
Repo$892.prototype[util$890.camelize('jobs')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'jobs',
        value$913
    ]);
};
Repo$892.prototype[util$890.camelize('current-branch')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'current-branch',
        value$914
    ]);
};
Repo$892.prototype[util$890.camelize('quiet')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'quiet',
        value$915
    ]);
};
Repo$892.prototype[util$890.camelize('local-manifest')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'local-manifest',
        value$916
    ]);
};