'use strict';
var util$915 = require('../../../misc/util.js');
var Thresholds$916 = require('./xunit/thresholds.js');
var Types$917 = require('./xunit/types.js');
var Xunit$919 = function (upper$924, obj$925) {
    this.upper = upper$924;
    this.obj = obj$925;
};
Xunit$919.prototype.up = function () {
    return this.upper;
};
Xunit$919.prototype.and = Xunit$919.prototype.up;
module.exports = Xunit$919;
Xunit$919.prototype[util$915.camelize('thresholdmode')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'thresholdmode',
        value$926
    ]);
};
Xunit$919.prototype[util$915.camelize('thresholds')] = function (value$927) {
    return util$915.customArrayAccessor.apply(this, [
        'thresholds',
        Thresholds$916,
        value$927
    ]);
};
Xunit$919.prototype[util$915.camelize('test-time-margin')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'test-time-margin',
        value$928
    ]);
};
Xunit$919.prototype[util$915.camelize('types')] = function (value$929) {
    return util$915.customArrayAccessor.apply(this, [
        'types',
        Types$917,
        value$929
    ]);
};