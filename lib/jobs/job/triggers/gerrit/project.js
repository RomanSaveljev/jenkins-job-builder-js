'use strict';
var util$890 = require('../../../../misc/util.js');
var Branch$891 = require('./project/branch.js');
var FilePath$892 = require('./project/file-path.js');
var Topic$893 = require('./project/topic.js');
var Project$895 = function (upper$903, obj$904) {
    this.upper = upper$903;
    this.obj = obj$904;
};
Project$895.prototype.up = function () {
    return this.upper;
};
Project$895.prototype.and = Project$895.prototype.up;
module.exports = Project$895;
Project$895.prototype[util$890.camelize('project-compare-type')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'project-compare-type',
        value$905
    ]);
};
Project$895.prototype[util$890.camelize('project-pattern')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'project-pattern',
        value$906
    ]);
};
Project$895.prototype[util$890.camelize('branch-compare-type')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'branch-compare-type',
        value$907
    ]);
};
Project$895.prototype[util$890.camelize('branch-pattern')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'branch-pattern',
        value$908
    ]);
};
Project$895.prototype[util$890.camelize('branches')] = function (value$909) {
    return util$890.objectArrayAccessor.apply(this, [
        'branches',
        Branch$891,
        value$909
    ]);
};
Project$895.prototype[util$890.camelize('file-paths')] = function (value$910) {
    return util$890.objectArrayAccessor.apply(this, [
        'file-paths',
        FilePath$892,
        value$910
    ]);
};
Project$895.prototype[util$890.camelize('topics')] = function (value$911) {
    return util$890.objectArrayAccessor.apply(this, [
        'topics',
        Topic$893,
        value$911
    ]);
};