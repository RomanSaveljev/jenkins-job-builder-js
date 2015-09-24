'use strict';
var util$915 = require('../../../misc/util.js');
var LogParser$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
LogParser$917.prototype.up = function () {
    return this.upper;
};
LogParser$917.prototype.and = LogParser$917.prototype.up;
module.exports = LogParser$917;
LogParser$917.prototype[util$915.camelize('max-lines')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'max-lines',
        value$922
    ]);
};
LogParser$917.prototype[util$915.camelize('fail-build')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-build',
        value$923
    ]);
};