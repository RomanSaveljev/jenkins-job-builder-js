"use strict";

var util = require('./misc/util.js');
var Job = require('./jobs/job.js');

var Jobs = function() {
  this.jobs = [];
  return this;
};
Jobs.prototype.job = util.generateKeyedObjectElementAccessor('jobs', 'job', Job);

module.exports = Jobs;
