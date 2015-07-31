"use strict";

var util = require('../util.js');

var M2RepositoryCleanup = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(M2RepositoryCleanup.prototype, 'upper');
M2RepositoryCleanup.prototype.patterns = util.generatePrimitiveArrayAccessor('obj', 'patterns');

module.exports = M2RepositoryCleanup;
