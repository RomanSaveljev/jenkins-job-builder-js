"use strict";

var util = require('../../../misc/util.js');
var Remote = require('./git/remote.js');
var Merge = require('./git/merge.js');
var ChangeLogAgainst = require('./git/changelog-against.js');
var Clean = require('./git/clean.js');
var SparseCheckout = require('./git/sparse-checkout.js');
var Submodule = require('./git/submodule.js');

var Git = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Git.prototype, 'upper');
Git.prototype.url = util.generatePrimitiveAccessor('obj', 'url');
Git.prototype.credentialsId = util.generatePrimitiveAccessor('obj', 'credentials-id');
Git.prototype.refspec = util.generatePrimitiveAccessor('obj', 'refspec');
Git.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Git.prototype.remotes = util.generateObjectArrayAccessor('obj', 'remotes', Remote);
Git.prototype.branches = util.generatePrimitiveArrayAccessor('obj', 'branches');
Git.prototype.excludedUsers = util.generatePrimitiveArrayAccessor('obj', 'excluded-users');
Git.prototype.includedRegions = util.generatePrimitiveArrayAccessor('obj', 'included-regions');
Git.prototype.excludedRegions = util.generatePrimitiveArrayAccessor('obj', 'excluded-regions');
Git.prototype.localBranch = util.generatePrimitiveAccessor('obj', 'local-branch');
Git.prototype.merge = util.generateObjectAccessor('obj', 'merge', Merge);
Git.prototype.basedir = util.generatePrimitiveAccessor('obj', 'basedir');
Git.prototype.skipTag = util.generatePrimitiveAccessor('obj', 'skip-tag');
Git.prototype.shallowClone = util.generatePrimitiveAccessor('obj', 'shallow-clone');
Git.prototype.prune = util.generatePrimitiveAccessor('obj', 'prune');
Git.prototype.fastpoll = util.generatePrimitiveAccessor('obj', 'fastpoll');
Git.prototype.useAuthor = util.generatePrimitiveAccessor('obj', 'use-author');
Git.prototype.gitTool = util.generatePrimitiveAccessor('obj', 'git-tool');
Git.prototype.referenceRepo = util.generatePrimitiveAccessor('obj', 'reference-repo');
Git.prototype.scmName = util.generatePrimitiveAccessor('obj', 'scm-name');
Git.prototype.ignoreNotify = util.generatePrimitiveAccessor('obj', 'ignore-notify');
Git.prototype.browser = util.generatePrimitiveAccessor('obj', 'browser');
Git.prototype.browserUrl = util.generatePrimitiveAccessor('obj', 'browser-url');
Git.prototype.browserVersion = util.generatePrimitiveAccessor('obj', 'browser-version');
Git.prototype.projectName = util.generatePrimitiveAccessor('obj', 'project-name');
Git.prototype.repoName = util.generatePrimitiveAccessor('obj', 'repo-name');
Git.prototype.choosingStrategy = util.generatePrimitiveAccessor('obj', 'choosing-strategy');
Git.prototype.gitConfigName = util.generatePrimitiveAccessor('obj', 'git-config-name');
Git.prototype.gitConfigEmail = util.generatePrimitiveAccessor('obj', 'git-config-email');
Git.prototype.changelogAgainst = util.generateObjectAccessor('obj', 'changelog-against', ChangeLogAgainst);
Git.prototype.clean = util.generateObjectAccessor('obj', 'clean', Clean);
Git.prototype.ignoreCommitsWithMessages = util.generatePrimitiveArrayAccessor('obj', 'ignore-commits-with-messages');
Git.prototype.forcePollingUsingWorkspace = util.generatePrimitiveAccessor('obj', 'force-polling-using-workspace');
Git.prototype.sparseCheckout = util.generateObjectAccessor('obj', 'sparse-checkout', SparseCheckout);
Git.prototype.submodule = util.generateObjectAccessor('obj', 'submodule', Submodule);
Git.prototype.timeout = util.generatePrimitiveAccessor('obj', 'timeout');
Git.prototype.wipeWorkspace = util.generatePrimitiveAccessor('obj', 'wipe-workspace');

module.exports = Git;
