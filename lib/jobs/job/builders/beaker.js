'use strict';
var util$890 = require('../../../misc/util.js');
var Beaker$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Beaker$892.prototype.up = function () {
    return this.upper;
};
Beaker$892.prototype.and = Beaker$892.prototype.up;
module.exports = Beaker$892;
Beaker$892.prototype[util$890.camelize('content')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'content',
        value$898
    ]);
};
Beaker$892.prototype[util$890.camelize('path')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'path',
        value$899
    ]);
};
Beaker$892.prototype[util$890.camelize('download-logs')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'download-logs',
        value$900
    ]);
};