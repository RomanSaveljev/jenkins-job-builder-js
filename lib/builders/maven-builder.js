"use strict";

var util = require('../util.js');

var MavenBuilder = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(MavenBuilder.prototype, 'upper');
MavenBuilder.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
MavenBuilder.prototype.pom = util.generatePrimitiveAccessor('obj', 'pom');
MavenBuilder.prototype.goals = util.generatePrimitiveAccessor('obj', 'goals');
MavenBuilder.prototype.mavenOpts = util.generatePrimitiveAccessor('obj', 'maven-opts');

module.exports = MavenBuilder;
