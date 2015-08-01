'use strict';
var util$890 = require('../../../misc/util.js');
var RichTextPublisher$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
RichTextPublisher$892.prototype.up = function () {
    return this.upper;
};
RichTextPublisher$892.prototype.and = RichTextPublisher$892.prototype.up;
module.exports = RichTextPublisher$892;
RichTextPublisher$892.prototype[util$890.camelize('stable-text')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'stable-text',
        value$899
    ]);
};
RichTextPublisher$892.prototype[util$890.camelize('unstable-text')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable-text',
        value$900
    ]);
};
RichTextPublisher$892.prototype[util$890.camelize('failed-text')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'failed-text',
        value$901
    ]);
};
RichTextPublisher$892.prototype[util$890.camelize('parser-name')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'parser-name',
        value$902
    ]);
};