'use strict';
var util$890 = require('../../../misc/util.js');
var LogFileSize$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
LogFileSize$892.prototype.up = function () {
    return this.upper;
};
LogFileSize$892.prototype.and = LogFileSize$892.prototype.up;
module.exports = LogFileSize$892;
LogFileSize$892.prototype[util$890.camelize('set-own')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'set-own',
        value$898
    ]);
};
LogFileSize$892.prototype[util$890.camelize('fail')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'fail',
        value$899
    ]);
};
LogFileSize$892.prototype[util$890.camelize('size')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'size',
        value$900
    ]);
};