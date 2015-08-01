'use strict';
var util$890 = require('../../../misc/util.js');
var LogParser$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
LogParser$892.prototype.up = function () {
    return this.upper;
};
LogParser$892.prototype.and = LogParser$892.prototype.up;
module.exports = LogParser$892;
LogParser$892.prototype[util$890.camelize('parse-rules')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'parse-rules',
        value$898
    ]);
};
LogParser$892.prototype[util$890.camelize('unstable-on-warning')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable-on-warning',
        value$899
    ]);
};
LogParser$892.prototype[util$890.camelize('fail-on-error')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-on-error',
        value$900
    ]);
};