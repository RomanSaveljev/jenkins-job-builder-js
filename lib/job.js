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

module.exports = Job;

var Job = function() {
  this.job = {};
  return this;
};

Job.prototype.name = generateNestedAccessor('job', 'name');
Job.prototype.description = generateNestedAccessor('job', 'description');
Job.prototype.node = generateNestedAccessor('job', 'node');
Job.prototype.projectType = generateNestedAccessor('job', 'project-type');
Job.prototype.clone = function() {
  var job = new Job();
  job.job = fancyDeepClone(this.job);
  return job;
}
Job.prototype.wrappers = function() {
  if (this.job.wrappers === undefined) {
    this.job.wrappers = [];
  }
  return new Wrappers(this.job.wrappers);
};
