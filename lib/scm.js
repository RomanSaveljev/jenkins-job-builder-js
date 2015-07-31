"use strict";

var util = require('./util.js');
var Git = require('./scm/git.js');
var Hg = require('./scm/hg.js');

var Scm = function(upper, array) {
  this.upper = upper;
  this.array = array;
  return this;
};

util.makeUppable(Scm.prototype, 'upper');
Scm.prototype.git = util.generateKeyedObjectElementAccessor('array', 'git', Git);
Scm.prototype.hg = util.generateKeyedObjectElementAccessor('array', 'hg', Hg);

module.exports = Scm;
