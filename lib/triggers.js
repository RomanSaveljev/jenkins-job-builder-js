"use strict";

var util = require('./util.js');
var BuildResult = require('./triggers/build-result.js');

var Triggers = function(upper, array) {
  this.upper = upper;
  this.array = array;
  return this;
};

util.makeUppable(Triggers.prototype, 'upper');
Triggers.prototype.buildResult = util.generateKeyedObjectElementAccessor('array', 'build-result', BuildResult);

module.exports = Triggers;
