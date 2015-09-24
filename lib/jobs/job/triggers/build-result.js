'use strict';
var util$915 = require('../../../misc/util.js');
var Group$916 = require('./build-result/group.js');
var BuildResult$918 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
BuildResult$918.prototype.up = function () {
    return this.upper;
};
BuildResult$918.prototype.and = BuildResult$918.prototype.up;
module.exports = BuildResult$918;
BuildResult$918.prototype[util$915.camelize('groups')] = function (value$924) {
    return util$915.objectArrayAccessor.apply(this, [
        'groups',
        Group$916,
        value$924
    ]);
};
BuildResult$918.prototype[util$915.camelize('combine')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'combine',
        value$925
    ]);
};
BuildResult$918.prototype[util$915.camelize('cron')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'cron',
        value$926
    ]);
};