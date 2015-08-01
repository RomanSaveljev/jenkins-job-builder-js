'use strict';
var util$890 = require('../../../misc/util.js');
var Tags$891 = require('./git/tags.js');
var Branches$892 = require('./git/branches.js');
var Notes$893 = require('./git/notes.js');
var Git$895 = function (upper$903, obj$904) {
    this.upper = upper$903;
    this.obj = obj$904;
};
Git$895.prototype.up = function () {
    return this.upper;
};
Git$895.prototype.and = Git$895.prototype.up;
module.exports = Git$895;
Git$895.prototype[util$890.camelize('push-merge')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'push-merge',
        value$905
    ]);
};
Git$895.prototype[util$890.camelize('push-only-if-success')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'push-only-if-success',
        value$906
    ]);
};
Git$895.prototype[util$890.camelize('tags')] = function (value$907) {
    return util$890.customArrayAccessor.apply(this, [
        'tags',
        Tags$891,
        value$907
    ]);
};
Git$895.prototype[util$890.camelize('branches')] = function (value$908) {
    return util$890.customArrayAccessor.apply(this, [
        'branches',
        Branches$892,
        value$908
    ]);
};
Git$895.prototype[util$890.camelize('notes')] = function (value$909) {
    return util$890.customArrayAccessor.apply(this, [
        'notes',
        Notes$893,
        value$909
    ]);
};
Git$895.prototype[util$890.camelize('allow-empty')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'allow-empty',
        value$910
    ]);
};
Git$895.prototype[util$890.camelize('fingerprint')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'fingerprint',
        value$911
    ]);
};