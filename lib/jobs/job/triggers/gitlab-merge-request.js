'use strict';
var util$890 = require('../../../misc/util.js');
var GitlabMergeRequest$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
GitlabMergeRequest$892.prototype.up = function () {
    return this.upper;
};
GitlabMergeRequest$892.prototype.and = GitlabMergeRequest$892.prototype.up;
module.exports = GitlabMergeRequest$892;
GitlabMergeRequest$892.prototype[util$890.camelize('cron')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'cron',
        value$897
    ]);
};
GitlabMergeRequest$892.prototype[util$890.camelize('project-path')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'project-path',
        value$898
    ]);
};