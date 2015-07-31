"use strict";

var util = require('../../util.js');

var Repo = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Repo.prototype, 'upper');
Repo.prototype.url = util.generatePrimitiveAccessor('obj', 'url');
Repo.prototype.basedir = util.generatePrimitiveAccessor('obj', 'basedir');
Repo.prototype.credentialsId = util.generatePrimitiveAccessor('obj', 'credentials-id');
Repo.prototype.repoDepth = util.generatePrimitiveAccessor('obj', 'repo-depth');
Repo.prototype.ignoreExternals = util.generatePrimitiveAccessor('obj', 'ignore-externals');

module.exports = Repo;
