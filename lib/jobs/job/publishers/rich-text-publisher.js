'use strict';
var util$915 = require('../../../misc/util.js');
var RichTextPublisher$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
RichTextPublisher$917.prototype.up = function () {
    return this.upper;
};
RichTextPublisher$917.prototype.and = RichTextPublisher$917.prototype.up;
module.exports = RichTextPublisher$917;
RichTextPublisher$917.prototype[util$915.camelize('stable-text')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'stable-text',
        value$924
    ]);
};
RichTextPublisher$917.prototype[util$915.camelize('unstable-text')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable-text',
        value$925
    ]);
};
RichTextPublisher$917.prototype[util$915.camelize('failed-text')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'failed-text',
        value$926
    ]);
};
RichTextPublisher$917.prototype[util$915.camelize('parser-name')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'parser-name',
        value$927
    ]);
};