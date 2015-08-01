'use strict';
var util$890 = require('../../../../misc/util.js');
var MetadataTag$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
MetadataTag$892.prototype.up = function () {
    return this.upper;
};
MetadataTag$892.prototype.and = MetadataTag$892.prototype.up;
module.exports = MetadataTag$892;
MetadataTag$892.prototype[util$890.camelize('key')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'key',
        value$897
    ]);
};
MetadataTag$892.prototype[util$890.camelize('value')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'value',
        value$898
    ]);
};