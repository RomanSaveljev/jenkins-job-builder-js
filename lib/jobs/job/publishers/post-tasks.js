'use strict';
var util$915 = require('../../../misc/util.js');
var Match$916 = require('./post-tasks/match.js');
var PostTasks$918 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
PostTasks$918.prototype.up = function () {
    return this.upper;
};
PostTasks$918.prototype.and = PostTasks$918.prototype.up;
module.exports = PostTasks$918;
PostTasks$918.prototype[util$915.camelize('matches')] = function (value$925) {
    return util$915.objectArrayAccessor.apply(this, [
        'matches',
        Match$916,
        value$925
    ]);
};
PostTasks$918.prototype[util$915.camelize('escalate-status')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'escalate-status',
        value$926
    ]);
};
PostTasks$918.prototype[util$915.camelize('run-if-job-successful')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'run-if-job-successful',
        value$927
    ]);
};
PostTasks$918.prototype[util$915.camelize('script')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'script',
        value$928
    ]);
};