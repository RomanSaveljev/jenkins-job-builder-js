"use strict";

var util = require('../misc/util.js');
var Wrappers = require('./wrappers.js');
var Builders = require('./builders.js');
var HipChat = require('./hipchat.js');
var Maven = require('./maven.js');
var ExecutionStrategy = require('./execution-strategy.js');
var Axes = require('./axes.js');
var Metadata = require('./metadata.js');
var Notifications = require('./notifications.js');
var Parameters = require('./parameters.js');
var Properties = require('./properties.js');
var Publishers = require('./publishers.js');
var Reportes = require('./reporters.js');
var Scm = require('./scm.js');
var Triggers = require('./triggers.js');

var Job = function(upper, job) {
  this.upper = upper;
  this.job = job;
  return this;
};

Job.prototype.clone = function() {
  var job = new Job();
  job.job = fancyDeepClone(this.job);
  return job;
}

util.makeUppable(Job.prototype, 'upper');
Job.prototype.name = util.generatePrimitiveAccessor('job', 'name');
Job.prototype.description = util.generatePrimitiveAccessor('job', 'description');
Job.prototype.node = util.generatePrimitiveAccessor('job', 'node');
Job.prototype.projectType = util.generatePrimitiveAccessor('job', 'project-type');
Job.prototype.dsl = util.generatePrimitiveAccessor('job', 'dsl');
Job.prototype.needsWorkspace = util.generatePrimitiveAccessor('job', 'needs-workspace');
Job.prototype.dslFile = util.generatePrimitiveAccessor('job', 'dsl-file');
Job.prototype.maven = util.generateObjectAccessor('job', 'maven', Maven);
Job.prototype.wrappers = util.generateCustomArrayAccessor('job', 'wrappers', Wrappers);
Job.prototype.builders = util.generateCustomArrayAccessor('job', 'builders', Builders);
Job.prototype.hipChat = util.generateObjectAccessor('job', 'hipchat', HipChat);
Job.prototype.executionStrategy = util.generateObjectAccessor('job', 'execution-strategy', ExecutionStrategy);
Job.prototype.axes = util.generateCustomArrayAccessor('job', 'axes', Axes);
Job.prototype.metadata = util.generateCustomArrayAccessor('job', 'metadata', Metadata);
Job.prototype.notifications = util.generateCustomArrayAccessor('job', 'notifications', Notifications);
Job.prototype.parameters = util.generateCustomArrayAccessor('job', 'parameters', Parameters);
Job.prototype.properties = util.generateCustomArrayAccessor('job', 'properties', Properties);
Job.prototype.publishers = util.generateCustomArrayAccessor('job', 'publishers', Publishers);
Job.prototype.reporters = util.generateCustomArrayAccessor('job', 'reporters', Reporters);
Job.prototype.scm = util.generateCustomArrayAccessor('job', 'scm', Scm);
Job.prototype.triggers = util.generateCustomArrayAccessor('job', 'triggers', Triggers);

module.exports = Job;
