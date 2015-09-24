'use strict';
var util$915 = require('../../../../misc/util.js');
var Branch$916 = require('./project/branch.js');
var FilePath$917 = require('./project/file-path.js');
var Topic$918 = require('./project/topic.js');
var Project$920 = function (upper$929, obj$930) {
    this.upper = upper$929;
    this.obj = obj$930;
};
Project$920.prototype.up = function () {
    return this.upper;
};
Project$920.prototype.and = Project$920.prototype.up;
module.exports = Project$920;
Project$920.prototype[util$915.camelize('project-compare-type')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'project-compare-type',
        value$931
    ]);
};
Project$920.prototype[util$915.camelize('project-pattern')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'project-pattern',
        value$932
    ]);
};
Project$920.prototype[util$915.camelize('branch-compare-type')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'branch-compare-type',
        value$933
    ]);
};
Project$920.prototype[util$915.camelize('branch-pattern')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'branch-pattern',
        value$934
    ]);
};
Project$920.prototype[util$915.camelize('branches')] = function (value$935) {
    return util$915.objectArrayAccessor.apply(this, [
        'branches',
        Branch$916,
        value$935
    ]);
};
Project$920.prototype[util$915.camelize('file-paths')] = function (value$936) {
    return util$915.objectArrayAccessor.apply(this, [
        'file-paths',
        FilePath$917,
        value$936
    ]);
};
Project$920.prototype[util$915.camelize('forbidden-file-paths')] = function (value$937) {
    return util$915.objectArrayAccessor.apply(this, [
        'forbidden-file-paths',
        FilePath$917,
        value$937
    ]);
};
Project$920.prototype[util$915.camelize('topics')] = function (value$938) {
    return util$915.objectArrayAccessor.apply(this, [
        'topics',
        Topic$918,
        value$938
    ]);
};