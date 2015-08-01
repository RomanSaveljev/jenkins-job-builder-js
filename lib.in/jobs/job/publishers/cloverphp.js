"use strict";

var util = require('../../../misc/util.js');
var Html = require('./cloverphp/html.js');
var MetricTargets = require('./cloverphp/metric-targets.js');

var Cloverphp = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Cloverphp.prototype, 'upper');
Cloverphp.prototype.xmlLocation = util.generatePrimitiveAccessor('obj', 'xml-location');
Cloverphp.prototype.html = util.generateObjectAccessor('obj', 'html', Html);
Cloverphp.prototype.metricTargets = util.generateCustomArrayAccessor('obj', 'metric-targets', MetricTargets);

module.exports = Cloverphp;
