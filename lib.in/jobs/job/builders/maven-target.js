"use strict";

var util = require('../../../misc/util.js');

var MavenTarget = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(MavenTarget.prototype, 'upper');
MavenTarget.prototype.goals = util.generatePrimitiveAccessor('obj', 'goals');
MavenTarget.prototype.properties = util.generatePrimitiveArrayAccessor('obj', 'properties');
MavenTarget.prototype.pom = util.generatePrimitiveAccessor('obj', 'pom');
MavenTarget.prototype.privateRepository = util.generatePrimitiveAccessor('obj', 'private-repository');
MavenTarget.prototype.mavenVersion = util.generatePrimitiveAccessor('obj', 'maven-version');
MavenTarget.prototype.javaOpts = util.generatePrimitiveArrayAccessor('obj', 'java-opts');
MavenTarget.prototype.settings = util.generatePrimitiveAccessor('obj', 'settings');
MavenTarget.prototype.globalSettings = util.generatePrimitiveAccessor('obj', 'global-settings');

module.exports = MavenTarget;
