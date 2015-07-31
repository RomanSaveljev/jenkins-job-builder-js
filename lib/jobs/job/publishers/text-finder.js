"use strict";

var util = require('../util.js');

var TextFinder = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(TextFinder.prototype, 'upper');
TextFinder.prototype.regexp = util.generatePrimitiveAccessor('obj', 'regexp');
TextFinder.prototype.fileset = util.generatePrimitiveAccessor('obj', 'fileset');
TextFinder.prototype.alsoCheckConsoleOutput = util.generatePrimitiveAccessor('obj', 'also-check-console-output');
TextFinder.prototype.succeedIfFound = util.generatePrimitiveAccessor('obj', 'succeed-if-found');
TextFinder.prototype.unstableIfFound = util.generatePrimitiveAccessor('obj', 'unstable-if-found');

module.exports = TextFinder;
