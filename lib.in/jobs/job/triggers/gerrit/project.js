"use strict";

var util = require('../../../../misc/util.js');
var Branch = require('./project/branch.js');
var FilePath = require('./project/file-path.js');
var Topic = require('./project/topic.js');

var Project = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Project.prototype, 'upper');
Project.prototype.projectCompareType = util.generatePrimitiveAccessor('obj', 'project-compare-type');
Project.prototype.projectPattern = util.generatePrimitiveAccessor('obj', 'project-pattern');
Project.prototype.branches = util.generateObjectArrayAccessor('obj', 'branches', Branch);
Project.prototype.filePaths = util.generateObjectArrayAccessor('obj', 'file-paths', FilePath);
Project.prototype.topics = util.generateObjectArrayAccessor('obj', 'topics', Topic);

module.exports = Project;
