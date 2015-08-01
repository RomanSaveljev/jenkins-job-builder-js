'use strict';
var util$890 = require('../../../../misc/util.js');
var SkipGlobalTriggers$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
SkipGlobalTriggers$892.prototype.up = function () {
    return this.upper;
};
SkipGlobalTriggers$892.prototype.and = SkipGlobalTriggers$892.prototype.up;
module.exports = SkipGlobalTriggers$892;
SkipGlobalTriggers$892.prototype[util$890.camelize('skip-when-scm-change')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'skip-when-scm-change',
        value$898
    ]);
};
SkipGlobalTriggers$892.prototype[util$890.camelize('skip-when-upstream-build')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'skip-when-upstream-build',
        value$899
    ]);
};
SkipGlobalTriggers$892.prototype[util$890.camelize('skip-when-envvar-defined')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'skip-when-envvar-defined',
        value$900
    ]);
};