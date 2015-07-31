"use strict";

var util = require('../../util.js');

var Repo = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Repo.prototype, 'upper');
Repo.prototype.url = util.generatePrimtiveAccessor('obj', 'url');
Repo.prototype.basedir = util.generatePrimtiveAccessor('obj', 'basedir');
Repo.prototype.credentialsId = util.generatePrimtiveAccessor('obj', 'credentials-id');
Repo.prototype.repoDepth = util.generatePrimtiveAccessor('obj', 'repo-depth');
Repo.prototype.ignoreExternals = util.generatePrimtiveAccessor('obj', 'ignore-externals');

module.exports = Repo;
