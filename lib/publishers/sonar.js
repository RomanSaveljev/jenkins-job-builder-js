"use strict";

var util = require('../util.js');
var SkipGlobalTriggers = require('./sonar/skip-global-triggers.js');

var Sonar = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Sonar.prototype, 'upper');
Sonar.prototype.jdk = util.generatePrimitiveAccessor('obj', 'jdk');
Sonar.prototype.branch = util.generatePrimitiveAccessor('obj', 'branch');
Sonar.prototype.language = util.generatePrimitiveAccessor('obj', 'language');
Sonar.prototype.mavenOpts = util.generatePrimitiveAccessor('obj', 'maven-opts');
Sonar.prototype.additionalProperties = util.generatePrimitiveAccessor('obj', 'additional-properties');
Sonar.prototype.skipGlobalTriggers = util.generateObjectAccessor('obj', 'skip-global-triggers', SkipGlobalTriggers);

module.exports = Sonar;
