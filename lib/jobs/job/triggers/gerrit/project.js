'use strict';
var util$890 = require('../../../../misc/util.js');
var Branch$891 = require('./project/branch.js');
var FilePath$892 = require('./project/file-path.js');
var Topic$893 = require('./project/topic.js');
var Project$895 = function (upper$901, obj$902) {
    this.upper = upper$901;
    this.obj = obj$902;
};
Project$895.prototype.up = function () {
    return this.upper;
};
Project$895.prototype.and = Project$895.prototype.up;
module.exports = Project$895;
Project$895.prototype[util$890.camelize('project-compare-type')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'project-compare-type',
        value$903
    ]);
};
Project$895.prototype[util$890.camelize('project-pattern')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'project-pattern',
        value$904
    ]);
};
Project$895.prototype[util$890.camelize('branches')] = function (value$905) {
    return util$890.objectArrayAccessor.apply(this, [
        'branches',
        Branch$891,
        value$905
    ]);
};
Project$895.prototype[util$890.camelize('file-paths')] = function (value$906) {
    return util$890.objectArrayAccessor.apply(this, [
        'file-paths',
        FilePath$892,
        value$906
    ]);
};
Project$895.prototype[util$890.camelize('topics')] = function (value$907) {
    return util$890.objectArrayAccessor.apply(this, [
        'topics',
        Topic$893,
        value$907
    ]);
};