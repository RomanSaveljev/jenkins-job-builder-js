'use strict';
var util$890 = require('../../../../misc/util.js');
var Entry$892 = function (upper$902, obj$903) {
    this.upper = upper$902;
    this.obj = obj$903;
};
Entry$892.prototype.up = function () {
    return this.upper;
};
Entry$892.prototype.and = Entry$892.prototype.up;
module.exports = Entry$892;
Entry$892.prototype[util$890.camelize('files')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'files',
        value$904
    ]);
};
Entry$892.prototype[util$890.camelize('basedir')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'basedir',
        value$905
    ]);
};
Entry$892.prototype[util$890.camelize('excludes')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'excludes',
        value$906
    ]);
};
Entry$892.prototype[util$890.camelize('remote')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'remote',
        value$907
    ]);
};
Entry$892.prototype[util$890.camelize('flatten')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'flatten',
        value$908
    ]);
};
Entry$892.prototype[util$890.camelize('delete-remote')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'delete-remote',
        value$909
    ]);
};
Entry$892.prototype[util$890.camelize('delete-remote-artifacts')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'delete-remote-artifacts',
        value$910
    ]);
};
Entry$892.prototype[util$890.camelize('fail-no-files')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-no-files',
        value$911
    ]);
};
Entry$892.prototype[util$890.camelize('groovy-script')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'groovy-script',
        value$912
    ]);
};