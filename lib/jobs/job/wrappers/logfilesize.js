'use strict';
var util$915 = require('../../../misc/util.js');
var LogFileSize$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
LogFileSize$917.prototype.up = function () {
    return this.upper;
};
LogFileSize$917.prototype.and = LogFileSize$917.prototype.up;
module.exports = LogFileSize$917;
LogFileSize$917.prototype[util$915.camelize('set-own')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'set-own',
        value$923
    ]);
};
LogFileSize$917.prototype[util$915.camelize('fail')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'fail',
        value$924
    ]);
};
LogFileSize$917.prototype[util$915.camelize('size')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'size',
        value$925
    ]);
};