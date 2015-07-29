"use strict";

var util = require('../../util.js');

var Report = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Report.prototype, 'upper');
Report.prototype.jmeter = util.generatePrimtiveAccessor('obj', 'jmeter');
Report.prototype.junit = util.generatePrimtiveAccessor('obj', 'junit');

module.exports = Report;
