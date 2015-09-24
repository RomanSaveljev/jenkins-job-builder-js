'use strict';
var util$940 = require('../../../misc/util.js');
var HtmlPublisher$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
HtmlPublisher$942.prototype.up = function () {
    return this.upper;
};
HtmlPublisher$942.prototype.and = HtmlPublisher$942.prototype.up;
module.exports = HtmlPublisher$942;
HtmlPublisher$942.prototype[util$940.camelize('name')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$950
    ]);
};
HtmlPublisher$942.prototype[util$940.camelize('dir')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'dir',
        value$951
    ]);
};
HtmlPublisher$942.prototype[util$940.camelize('files')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'files',
        value$952
    ]);
};
HtmlPublisher$942.prototype[util$940.camelize('keep-all')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'keep-all',
        value$953
    ]);
};
HtmlPublisher$942.prototype[util$940.camelize('allow-missing')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'allow-missing',
        value$954
    ]);
};