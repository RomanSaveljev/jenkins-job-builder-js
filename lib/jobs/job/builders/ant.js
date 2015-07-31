"use strict";

var util = require('../../../misc/util.js');

var Ant = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Ant.prototype, 'upper');
Ant.prototype.targets = util.generatePrimitiveAccessor('obj', 'targets');
Ant.prototype.buildFile = util.generatePrimitiveAccessor('obj', 'buildfile');
Ant.prototype.properties = util.generateToDoMember('Need to figure out the undefined method proxy');
Ant.prototype.antName = util.generatePrimitiveAccessor('obj', 'ant-name');
Ant.prototype.javaOpts = util.generatePrimitiveAccessor('obj', 'java-opts');

module.exports = Ant;
