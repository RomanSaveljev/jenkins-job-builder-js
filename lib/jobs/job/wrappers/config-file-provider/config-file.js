'use strict';
var util$890 = require('../../../../misc/util.js');
var ConfigFile$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
ConfigFile$892.prototype.up = function () {
    return this.upper;
};
ConfigFile$892.prototype.and = ConfigFile$892.prototype.up;
module.exports = ConfigFile$892;
ConfigFile$892.prototype[util$890.camelize('file-id')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'file-id',
        value$898
    ]);
};
ConfigFile$892.prototype[util$890.camelize('target')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'target',
        value$899
    ]);
};
ConfigFile$892.prototype[util$890.camelize('variable')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'variable',
        value$900
    ]);
};