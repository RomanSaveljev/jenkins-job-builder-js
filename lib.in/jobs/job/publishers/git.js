"use strict";

var util = require('../../../misc/util.js');
var Tags = require('./git/tags.js');
var Branches = require('./git/branches.js');
var Notes = require('./git/notes.js');

var Git = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Git.prototype, 'upper');
Git.prototype.pushMerge = util.generatePrimitiveAccessor('obj', 'push-merge');
Git.prototype.pushOnlyIfSuccess = util.generatePrimitiveAccessor('obj', 'push-only-if-success');
Git.prototype.tags = util.generateCustomArrayAccessor('obj', 'tags', Tags);
Git.prototype.branches = util.generateCustomArrayAccessor('obj', 'branches', Branches);
Git.prototype.notes = util.generateCustomArrayAccessor('obj', 'notes', Notes);

Git.prototype.allowEmpty = util.generatePrimitiveAccessor('obj', 'allow-empty');
Git.prototype.fingerprint = util.generatePrimitiveAccessor('obj', 'fingerprint');

module.exports = Git;
