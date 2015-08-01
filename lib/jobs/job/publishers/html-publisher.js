'use strict';
var util$890 = require('../../../misc/util.js');
var HtmlPublisher$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
HtmlPublisher$892.prototype.up = function () {
    return this.upper;
};
HtmlPublisher$892.prototype.and = HtmlPublisher$892.prototype.up;
module.exports = HtmlPublisher$892;
HtmlPublisher$892.prototype[util$890.camelize('name')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$900
    ]);
};
HtmlPublisher$892.prototype[util$890.camelize('dir')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'dir',
        value$901
    ]);
};
HtmlPublisher$892.prototype[util$890.camelize('files')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'files',
        value$902
    ]);
};
HtmlPublisher$892.prototype[util$890.camelize('keep-all')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'keep-all',
        value$903
    ]);
};
HtmlPublisher$892.prototype[util$890.camelize('allow-missing')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'allow-missing',
        value$904
    ]);
};