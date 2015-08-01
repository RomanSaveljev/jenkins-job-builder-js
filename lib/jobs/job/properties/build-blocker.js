'use strict';
var util$890 = require('../../../misc/util.js');
var BuildBlocker$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
BuildBlocker$892.prototype.up = function () {
    return this.upper;
};
BuildBlocker$892.prototype.and = BuildBlocker$892.prototype.up;
module.exports = BuildBlocker$892;
BuildBlocker$892.prototype[util$890.camelize('use-build-blocker')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'use-build-blocker',
        value$897
    ]);
};
BuildBlocker$892.prototype[util$890.camelize('blocking-jobs')] = function (value$898) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'blocking-jobs',
        value$898
    ]);
};