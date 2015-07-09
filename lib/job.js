/*!
 * job - lib/job.js
 * Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var util = require('./util.js');
var Wrappers = require('./wrappers.js');
var Builders = require('./builders.js');
var HipChat = require('./hipchat.js');
var Maven = require('./maven-project/maven.js');


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

module.exports = Job;
