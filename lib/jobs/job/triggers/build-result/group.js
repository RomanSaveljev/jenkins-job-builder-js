"use strict";

var util = require('../../../../misc/util.js');

var Group = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Group.prototype, 'upper');
Group.prototype.jobs = util.generatePrimtiveArrayAccessor('obj', 'jobs');
Group.prototype.results = util.generatePrimtiveArrayAccessor('obj', 'results');

module.exports = Group;
