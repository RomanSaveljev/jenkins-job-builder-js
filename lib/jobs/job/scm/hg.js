'use strict';
var util$890 = require('../../../misc/util.js');
var Hg$892 = function (upper$903, obj$904) {
    this.upper = upper$903;
    this.obj = obj$904;
};
Hg$892.prototype.up = function () {
    return this.upper;
};
Hg$892.prototype.and = Hg$892.prototype.up;
module.exports = Hg$892;
Hg$892.prototype[util$890.camelize('url')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'url',
        value$905
    ]);
};
Hg$892.prototype[util$890.camelize('credentials-id')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'credentials-id',
        value$906
    ]);
};
Hg$892.prototype[util$890.camelize('revision-type')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'revision-type',
        value$907
    ]);
};
Hg$892.prototype[util$890.camelize('revision')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'revision',
        value$908
    ]);
};
Hg$892.prototype[util$890.camelize('modules')] = function (value$909) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'modules',
        value$909
    ]);
};
Hg$892.prototype[util$890.camelize('clean')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'clean',
        value$910
    ]);
};
Hg$892.prototype[util$890.camelize('subdir')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'subdir',
        value$911
    ]);
};
Hg$892.prototype[util$890.camelize('disable-changelog')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'disable-changelog',
        value$912
    ]);
};
Hg$892.prototype[util$890.camelize('browser')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'browser',
        value$913
    ]);
};
Hg$892.prototype[util$890.camelize('browser-url')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'browser-url',
        value$914
    ]);
};