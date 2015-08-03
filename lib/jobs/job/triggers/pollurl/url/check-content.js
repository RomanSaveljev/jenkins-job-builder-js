'use strict';
var util$890 = require('../../../../../misc/util.js');
var CheckContent$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
CheckContent$892.prototype.up = function () {
    return this.upper;
};
CheckContent$892.prototype.and = CheckContent$892.prototype.up;
module.exports = CheckContent$892;
CheckContent$892.prototype[util$890.camelize('simple')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'simple',
        value$899
    ]);
};
CheckContent$892.prototype[util$890.camelize('json')] = function (value$900) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'json',
        value$900
    ]);
};
CheckContent$892.prototype[util$890.camelize('text')] = function (value$901) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'text',
        value$901
    ]);
};
CheckContent$892.prototype[util$890.camelize('xml')] = function (value$902) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'xml',
        value$902
    ]);
};