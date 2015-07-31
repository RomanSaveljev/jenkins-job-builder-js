"use strict";

var util = require('../util.js');
var Series = require('./plot/series.js');

var Plot = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Plot.prototype, 'upper');
Plot.prototype.title = util.generatePrimitiveAccessor('obj', 'title');
Plot.prototype.yaxis = util.generatePrimitiveAccessor('obj', 'yaxis');
Plot.prototype.group = util.generatePrimitiveAccessor('obj', 'group');
Plot.prototype.numBuilds = util.generatePrimitiveAccessor('obj', 'num-builds');
Plot.prototype.style = util.generatePrimitiveAccessor('obj', 'style');
Plot.prototype.useDescription = util.generatePrimitiveAccessor('obj', 'use-description');
Plot.prototype.excludeZeroYaxis = util.generatePrimitiveAccessor('obj', 'exclude-zero-yaxis');
Plot.prototype.logarithmicYaxis = util.generatePrimitiveAccessor('obj', 'logarithmic-yaxis');
Plot.prototype.keepRecords = util.generatePrimitiveAccessor('obj', 'keep-records');
Plot.prototype.csvFileName = util.generatePrimitiveAccessor('obj', 'csv-file-name');
Plot.prototype.series = util.generateObjectArrayAccessor('obj', 'series', Series);

module.exports = Plot;
