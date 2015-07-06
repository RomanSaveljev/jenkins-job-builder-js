"use strict";

var util = require('./util.js');
var Job = require('./job.js');

var Jobs = function() {
  this.jobs = [];
  return this;
};
Jobs.prototype.job = util.generateKeyedObjectElementAccessor('jobs', 'job', Job);

module.exports = Jobs;
