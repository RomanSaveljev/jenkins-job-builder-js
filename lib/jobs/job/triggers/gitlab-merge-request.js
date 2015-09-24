'use strict';
var util$915 = require('../../../misc/util.js');
var GitlabMergeRequest$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
GitlabMergeRequest$917.prototype.up = function () {
    return this.upper;
};
GitlabMergeRequest$917.prototype.and = GitlabMergeRequest$917.prototype.up;
module.exports = GitlabMergeRequest$917;
GitlabMergeRequest$917.prototype[util$915.camelize('cron')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'cron',
        value$922
    ]);
};
GitlabMergeRequest$917.prototype[util$915.camelize('project-path')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'project-path',
        value$923
    ]);
};