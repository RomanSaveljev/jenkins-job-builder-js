'use strict';
var util$890 = require('../../../misc/util.js');
var LogParser$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
LogParser$892.prototype.up = function () {
    return this.upper;
};
LogParser$892.prototype.and = LogParser$892.prototype.up;
module.exports = LogParser$892;
LogParser$892.prototype[util$890.camelize('max-lines')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'max-lines',
        value$897
    ]);
};
LogParser$892.prototype[util$890.camelize('fail-build')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-build',
        value$898
    ]);
};