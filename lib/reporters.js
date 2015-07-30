"use strict";

var util = require('./util.js');
var Email = require('./reporters/email.js');
var Email = require('./publishers/findbugs.js');

var Reporters = function(upper, array) {
  this.upper = upper;
  this.array = array;
  return this;
};

util.makeUppable(Reporters.prototype, 'upper');
Reporters.prototype.email = util.generateKeyedObjectElementAccessor('array', 'email', Email);
Reporters.prototype.findbugs = util.generateKeyedObjectElementAccessor('array', 'findbugs', FindBugs);

module.exports = Reporters;
