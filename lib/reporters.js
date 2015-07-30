"use strict";

var util = require('./util.js');
var Email = require('./reporters/email.js');

var Reporters = function(upper, array) {
  this.upper = upper;
  this.array = array;
  return this;
};

util.makeUppable(Reporters.prototype, 'upper');
Reporters.prototype.email = util.generateKeyedObjectElementAccessor('array', 'email', Email);

module.exports = Reporters;
