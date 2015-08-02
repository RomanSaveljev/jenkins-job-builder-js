'use strict';
var util$890 = require('../../../misc/util.js');
var Match$891 = require('./post-tasks/match.js');
var PostTasks$893 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
PostTasks$893.prototype.up = function () {
    return this.upper;
};
PostTasks$893.prototype.and = PostTasks$893.prototype.up;
module.exports = PostTasks$893;
PostTasks$893.prototype[util$890.camelize('matches')] = function (value$900) {
    return util$890.objectArrayAccessor.apply(this, [
        'matches',
        Match$891,
        value$900
    ]);
};
PostTasks$893.prototype[util$890.camelize('escalate-status')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'escalate-status',
        value$901
    ]);
};
PostTasks$893.prototype[util$890.camelize('run-if-job-successful')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'run-if-job-successful',
        value$902
    ]);
};
PostTasks$893.prototype[util$890.camelize('script')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'script',
        value$903
    ]);
};