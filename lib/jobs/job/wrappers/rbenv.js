'use strict';
var util$915 = require('../../../misc/util.js');
var Rbenv$917 = function (upper$926, obj$927) {
    this.upper = upper$926;
    this.obj = obj$927;
};
Rbenv$917.prototype.up = function () {
    return this.upper;
};
Rbenv$917.prototype.and = Rbenv$917.prototype.up;
module.exports = Rbenv$917;
Rbenv$917.prototype[util$915.camelize('ruby-version')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'ruby-version',
        value$928
    ]);
};
Rbenv$917.prototype[util$915.camelize('ignore-local-version')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'ignore-local-version',
        value$929
    ]);
};
Rbenv$917.prototype[util$915.camelize('preinstall-gem-list')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'preinstall-gem-list',
        value$930
    ]);
};
Rbenv$917.prototype[util$915.camelize('rbenv-root')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'rbenv-root',
        value$931
    ]);
};
Rbenv$917.prototype[util$915.camelize('rbenv-repo')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'rbenv-repo',
        value$932
    ]);
};
Rbenv$917.prototype[util$915.camelize('rbenv-branch')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'rbenv-branch',
        value$933
    ]);
};
Rbenv$917.prototype[util$915.camelize('ruby-build-repo')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'ruby-build-repo',
        value$934
    ]);
};
Rbenv$917.prototype[util$915.camelize('ruby-build-branch')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'ruby-build-branch',
        value$935
    ]);
};