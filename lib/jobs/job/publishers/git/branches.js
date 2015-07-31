"use strict";

var util = require('../../../../misc/util.js');
var Branch = require('./branch.js');

var Branches = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(Branches.prototype, 'upper');
Branches.prototype.branch = util.generateKeyedObjectElementAccessor('obj', 'branch', Branch);

module.exports = Branches;
