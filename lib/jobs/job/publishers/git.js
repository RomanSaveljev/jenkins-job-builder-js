'use strict';
var util$915 = require('../../../misc/util.js');
var Tags$916 = require('./git/tags.js');
var Branches$917 = require('./git/branches.js');
var Notes$918 = require('./git/notes.js');
var Git$920 = function (upper$928, obj$929) {
    this.upper = upper$928;
    this.obj = obj$929;
};
Git$920.prototype.up = function () {
    return this.upper;
};
Git$920.prototype.and = Git$920.prototype.up;
module.exports = Git$920;
Git$920.prototype[util$915.camelize('push-merge')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'push-merge',
        value$930
    ]);
};
Git$920.prototype[util$915.camelize('push-only-if-success')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'push-only-if-success',
        value$931
    ]);
};
Git$920.prototype[util$915.camelize('tags')] = function (value$932) {
    return util$915.customArrayAccessor.apply(this, [
        'tags',
        Tags$916,
        value$932
    ]);
};
Git$920.prototype[util$915.camelize('branches')] = function (value$933) {
    return util$915.customArrayAccessor.apply(this, [
        'branches',
        Branches$917,
        value$933
    ]);
};
Git$920.prototype[util$915.camelize('notes')] = function (value$934) {
    return util$915.customArrayAccessor.apply(this, [
        'notes',
        Notes$918,
        value$934
    ]);
};
Git$920.prototype[util$915.camelize('allow-empty')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'allow-empty',
        value$935
    ]);
};
Git$920.prototype[util$915.camelize('fingerprint')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'fingerprint',
        value$936
    ]);
};