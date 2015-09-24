'use strict';
var util$915 = require('../../../misc/util.js');
var BuildPublisher$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
BuildPublisher$917.prototype.up = function () {
    return this.upper;
};
BuildPublisher$917.prototype.and = BuildPublisher$917.prototype.up;
module.exports = BuildPublisher$917;
BuildPublisher$917.prototype[util$915.camelize('publish-unstable-builds')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'publish-unstable-builds',
        value$924
    ]);
};
BuildPublisher$917.prototype[util$915.camelize('publish-failed-builds')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'publish-failed-builds',
        value$925
    ]);
};
BuildPublisher$917.prototype[util$915.camelize('days-to-keep')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'days-to-keep',
        value$926
    ]);
};
BuildPublisher$917.prototype[util$915.camelize('num-to-keep')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'num-to-keep',
        value$927
    ]);
};