'use strict';
var util$915 = require('../../../../misc/util.js');
var SkipVote$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
SkipVote$917.prototype.up = function () {
    return this.upper;
};
SkipVote$917.prototype.and = SkipVote$917.prototype.up;
module.exports = SkipVote$917;
SkipVote$917.prototype[util$915.camelize('successful')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'successful',
        value$924
    ]);
};
SkipVote$917.prototype[util$915.camelize('failed')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'failed',
        value$925
    ]);
};
SkipVote$917.prototype[util$915.camelize('unstable')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable',
        value$926
    ]);
};
SkipVote$917.prototype[util$915.camelize('notbuilt')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'notbuilt',
        value$927
    ]);
};