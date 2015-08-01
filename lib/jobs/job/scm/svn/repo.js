'use strict';
var util$890 = require('../../../../misc/util.js');
var Repo$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
Repo$892.prototype.up = function () {
    return this.upper;
};
Repo$892.prototype.and = Repo$892.prototype.up;
module.exports = Repo$892;
Repo$892.prototype[util$890.camelize('url')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'url',
        value$900
    ]);
};
Repo$892.prototype[util$890.camelize('basedir')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'basedir',
        value$901
    ]);
};
Repo$892.prototype[util$890.camelize('credentials-id')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'credentials-id',
        value$902
    ]);
};
Repo$892.prototype[util$890.camelize('repo-depth')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'repo-depth',
        value$903
    ]);
};
Repo$892.prototype[util$890.camelize('ignore-externals')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'ignore-externals',
        value$904
    ]);
};