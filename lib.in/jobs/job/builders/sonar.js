"use strict";

var util = require('../../../misc/util.js');

var Sonar = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Sonar.prototype, 'upper');
Sonar.prototype.sonarName = util.generatePrimitiveAccessor('obj', 'sonar-name');
Sonar.prototype.task = util.generatePrimitiveAccessor('obj', 'task');
Sonar.prototype.project = util.generatePrimitiveAccessor('obj', 'project');
Sonar.prototype.javaOpts = util.generatePrimitiveAccessor('obj', 'java-opts');
Sonar.prototype.jdk = util.generatePrimitiveAccessor('obj', 'jdk');

module.exports = Sonar;
