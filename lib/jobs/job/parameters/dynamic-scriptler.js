'use strict';
var util$890 = require('../../../misc/util.js');
var Parameter$891 = require('./dynamic-scriptler/parameter.js');
var DynamicScriptler$893 = function (upper$900, obj$901) {
    this.upper = upper$900;
    this.obj = obj$901;
};
DynamicScriptler$893.prototype.up = function () {
    return this.upper;
};
DynamicScriptler$893.prototype.and = DynamicScriptler$893.prototype.up;
module.exports = DynamicScriptler$893;
DynamicScriptler$893.prototype[util$890.camelize('name')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$902
    ]);
};
DynamicScriptler$893.prototype[util$890.camelize('description')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'description',
        value$903
    ]);
};
DynamicScriptler$893.prototype[util$890.camelize('script-id')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'script-id',
        value$904
    ]);
};
DynamicScriptler$893.prototype[util$890.camelize('parameters')] = function (value$905) {
    return util$890.objectArrayAccessor.apply(this, [
        'parameters',
        Parameter$891,
        value$905
    ]);
};
DynamicScriptler$893.prototype[util$890.camelize('remote')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'remote',
        value$906
    ]);
};
DynamicScriptler$893.prototype[util$890.camelize('read-only')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'read-only',
        value$907
    ]);
};