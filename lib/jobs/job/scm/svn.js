"use strict";

var util = require('../util.js');
var Repo = require('./svn/repo.js');

var Svn = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Svn.prototype, 'upper');
Svn.prototype.url = util.generatePrimitiveAccessor('obj', 'url');
Svn.prototype.basedir = util.generatePrimitiveAccessor('obj', 'basedir');
Svn.prototype.credentialsId = util.generatePrimitiveAccessor('obj', 'credentials-id');
Svn.prototype.repoDepth = util.generatePrimitiveAccessor('obj', 'repo-depth');
Svn.prototype.ignoreExternals = util.generatePrimitiveAccessor('obj', 'ignore-externals');
Svn.prototype.workspaceupdater = util.generatePrimitiveAccessor('obj', 'workspaceupdater');
Svn.prototype.excludedUsers = util.generatePrimitiveArrayAccessor('obj', 'excluded-users');
Svn.prototype.includedRegions = util.generatePrimitiveArrayAccessor('obj', 'included-regions');
Svn.prototype.excludedRegions = util.generatePrimitiveArrayAccessor('obj', 'excluded-regions');
Svn.prototype.excludedCommitMessages = util.generatePrimitiveArrayAccessor('obj', 'excluded-commit-messages');
Svn.prototype.exclusionRevpropName = util.generatePrimitiveAccessor('obj', 'exclusion-revprop-name');
Svn.prototype.ignorePropertyChangesOnDirectories = util.generatePrimitiveAccessor('obj', 'ignore-property-changes-on-directories');
Svn.prototype.filterChangelog = util.generatePrimitiveAccessor('obj', 'filter-changelog');
Svn.prototype.repos = util.generateObjectArrayAccessor('obj', 'repos', Repo);
Svn.prototype.viewvcUrl = util.generatePrimitiveAccessor('obj', 'viewvc-url');

module.exports = Svn;
