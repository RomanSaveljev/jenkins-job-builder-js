"use strict";

var util = require('../../../misc/util.js');

var Repo = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Repo.prototype, 'upper');
Repo.prototype.manifestUrl = util.generatePrimitiveAccessor('obj', 'manifest-url');
Repo.prototype.manifestBranch = util.generatePrimitiveAccessor('obj', 'manifest-branch');
Repo.prototype.manifestFile = util.generatePrimitiveAccessor('obj', 'manifest-file');
Repo.prototype.manifestGroup = util.generatePrimitiveAccessor('obj', 'manifest-group');
Repo.prototype.destinationDir = util.generatePrimitiveAccessor('obj', 'destination-dir');
Repo.prototype.repoUrl = util.generatePrimitiveAccessor('obj', 'repo-url');
Repo.prototype.mirrorDir = util.generatePrimitiveAccessor('obj', 'mirror-dir');
Repo.prototype.jobs = util.generatePrimitiveAccessor('obj', 'jobs');
Repo.prototype.currentBranch = util.generatePrimitiveAccessor('obj', 'current-branch');
Repo.prototype.quiet = util.generatePrimitiveAccessor('obj', 'quiet');
Repo.prototype.localManifest = util.generatePrimitiveAccessor('obj', 'local-manifest');

module.exports = Repo;
