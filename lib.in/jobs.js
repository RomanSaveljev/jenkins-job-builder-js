"use strict";

var util = require('./misc/util.js');
var Job = require('./jobs/job.js');

var Jobs = function() {
  this.array = [];
  return this;
};
keyedObjectElement(util, Jobs, 'job', Job)

module.exports = Jobs;
