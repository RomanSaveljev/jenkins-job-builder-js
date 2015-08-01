'use strict';
var util$890 = require('../../../misc/util.js');
var Stash$892 = function (upper$899, obj$900) {
    this.upper = upper$899;
    this.obj = obj$900;
};
Stash$892.prototype.up = function () {
    return this.upper;
};
Stash$892.prototype.and = Stash$892.prototype.up;
module.exports = Stash$892;
Stash$892.prototype[util$890.camelize('url')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'url',
        value$901
    ]);
};
Stash$892.prototype[util$890.camelize('username')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'username',
        value$902
    ]);
};
Stash$892.prototype[util$890.camelize('password')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'password',
        value$903
    ]);
};
Stash$892.prototype[util$890.camelize('ignore-ssl')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'ignore-ssl',
        value$904
    ]);
};
Stash$892.prototype[util$890.camelize('commit-sha1')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'commit-sha1',
        value$905
    ]);
};
Stash$892.prototype[util$890.camelize('include-build-number')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'include-build-number',
        value$906
    ]);
};