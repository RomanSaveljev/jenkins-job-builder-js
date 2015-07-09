"use strict";

var util = require('../util.js');

var Grails = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Grails.prototype, 'upper');
Grails.prototype.useWrapper = util.generatePrimitiveAccessor('obj', 'use-wrapper');
Grails.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Grails.prototype.forceUpgrade = util.generatePrimitiveAccessor('obj', 'force-upgrade');
Grails.prototype.nonInteractive = util.generatePrimitiveAccessor('obj', 'non-interactive');
Grails.prototype.targets = util.generatePrimitiveAccessor('obj', 'targets');
Grails.prototype.serverPort = util.generatePrimitiveAccessor('obj', 'server-port');
Grails.prototype.workDir = util.generatePrimitiveAccessor('obj', 'work-dir');
Grails.prototype.projectDir = util.generatePrimitiveAccessor('obj', 'project-dir');
Grails.prototype.baseDir = util.generatePrimitiveAccessor('obj', 'base-dir');
Grails.prototype.properties = util.generatePrimitiveAccessor('obj', 'properties');
Grails.prototype.plainOutput = util.generatePrimitiveAccessor('obj', 'plainOutput');
Grails.prototype.stackTrace = util.generatePrimitiveAccessor('obj', 'strack-trace');
Grails.prototype.verbose = util.generatePrimitiveAccessor('obj', 'verbose');
Grails.prototype.refreshDependencies = util.generatePrimitiveAccessor('obj', 'refresh-dependencies');

module.exports = Grails;
