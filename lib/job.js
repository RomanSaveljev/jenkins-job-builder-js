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

var Job = function(upper, job) {
  this.upper = upper;
  this.job = job;
  return this;
};

util.makeUppable(Job.prototype, 'upper');
Job.prototype.name = util.generatePrimitiveAccessor('job', 'name');
Job.prototype.description = util.generatePrimitiveAccessor('job', 'description');
Job.prototype.node = util.generatePrimitiveAccessor('job', 'node');
Job.prototype.projectType = util.generatePrimitiveAccessor('job', 'project-type');
Job.prototype.clone = function() {
  var job = new Job();
  job.job = fancyDeepClone(this.job);
  return job;
}
Job.prototype.wrappers = util.generateCustomArrayAccessor('job', 'wrappers', Wrappers);
Job.prototype.builders = util.generateCustomArrayAccessor('job', 'builders', Builders);

module.exports = Job;
