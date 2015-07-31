"use strict";

var util = require('./util.js');
var Git = require('./scm/git.js');
var Hg = require('./scm/hg.js');
var Repo = require('./scm/repo.js');
var Svn = require('./scm/svn.js');
var Tfs = require('./scm/tfs.js');
var Workspace = require('./scm/workspace.js');

var Scm = function(upper, array) {
  this.upper = upper;
  this.array = array;
  return this;
};

util.makeUppable(Scm.prototype, 'upper');
Scm.prototype.git = util.generateKeyedObjectElementAccessor('array', 'git', Git);
Scm.prototype.hg = util.generateKeyedObjectElementAccessor('array', 'hg', Hg);
Scm.prototype.repo = util.generateKeyedObjectElementAccessor('array', 'repo', Repo);
Scm.prototype.store = util.generateKeyedObjectElementAccessor('array', 'store', Store);
Scm.prototype.svn = util.generateKeyedObjectElementAccessor('array', 'svn', Svn);
Scm.prototype.tfs = util.generateKeyedObjectElementAccessor('array', 'tfs', Tfs);
Scm.prototype.workspace = util.generateKeyedObjectElementAccessor('array', 'workspace', Workspace);

module.exports = Scm;
