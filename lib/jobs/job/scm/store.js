'use strict';
var util$890 = require('../../../misc/util.js');
var Pundle$891 = require('./store/pundle.js');
var Store$893 = function (upper$900, obj$901) {
    this.upper = upper$900;
    this.obj = obj$901;
};
Store$893.prototype.up = function () {
    return this.upper;
};
Store$893.prototype.and = Store$893.prototype.up;
module.exports = Store$893;
Store$893.prototype[util$890.camelize('script')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'script',
        value$902
    ]);
};
Store$893.prototype[util$890.camelize('repository')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'repository',
        value$903
    ]);
};
Store$893.prototype[util$890.camelize('version-regex')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'version-regex',
        value$904
    ]);
};
Store$893.prototype[util$890.camelize('minimum-blessing')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'minimum-blessing',
        value$905
    ]);
};
Store$893.prototype[util$890.camelize('parcel-builder-file')] = function (value$906) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'parcel-builder-file',
        value$906
    ]);
};
Store$893.prototype[util$890.camelize('pundles')] = function (value$907) {
    return util$890.objectArrayAccessor.apply(this, [
        'pundles',
        Pundle$891,
        value$907
    ]);
};