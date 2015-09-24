'use strict';
var util$915 = require('../../../misc/util.js');
var HtmlPublisher$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
HtmlPublisher$917.prototype.up = function () {
    return this.upper;
};
HtmlPublisher$917.prototype.and = HtmlPublisher$917.prototype.up;
module.exports = HtmlPublisher$917;
HtmlPublisher$917.prototype[util$915.camelize('name')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$925
    ]);
};
HtmlPublisher$917.prototype[util$915.camelize('dir')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'dir',
        value$926
    ]);
};
HtmlPublisher$917.prototype[util$915.camelize('files')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'files',
        value$927
    ]);
};
HtmlPublisher$917.prototype[util$915.camelize('keep-all')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'keep-all',
        value$928
    ]);
};
HtmlPublisher$917.prototype[util$915.camelize('allow-missing')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'allow-missing',
        value$929
    ]);
};