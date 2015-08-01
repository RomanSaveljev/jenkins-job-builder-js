'use strict';
var util$890 = require('../../../misc/util.js');
var Rbenv$892 = function (upper$901, obj$902) {
    this.upper = upper$901;
    this.obj = obj$902;
};
Rbenv$892.prototype.up = function () {
    return this.upper;
};
Rbenv$892.prototype.and = Rbenv$892.prototype.up;
module.exports = Rbenv$892;
Rbenv$892.prototype[util$890.camelize('ruby-version')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'ruby-version',
        value$903
    ]);
};
Rbenv$892.prototype[util$890.camelize('ignore-local-version')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'ignore-local-version',
        value$904
    ]);
};
Rbenv$892.prototype[util$890.camelize('preinstall-gem-list')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'preinstall-gem-list',
        value$905
    ]);
};
Rbenv$892.prototype[util$890.camelize('rbenv-root')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'rbenv-root',
        value$906
    ]);
};
Rbenv$892.prototype[util$890.camelize('rbenv-repo')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'rbenv-repo',
        value$907
    ]);
};
Rbenv$892.prototype[util$890.camelize('rbenv-branch')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'rbenv-branch',
        value$908
    ]);
};
Rbenv$892.prototype[util$890.camelize('ruby-build-repo')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'ruby-build-repo',
        value$909
    ]);
};
Rbenv$892.prototype[util$890.camelize('ruby-build-branch')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'ruby-build-branch',
        value$910
    ]);
};