"use strict";

var util = require('../../../misc/util.js');

var LiveScreenshot = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(LiveScreenshot.prototype, 'upper');
LiveScreenshot.prototype.fullSize = util.generatePrimitiveArrayAccessor('obj', 'full-size');
LiveScreenshot.prototype.thumbnail = util.generatePrimitiveArrayAccessor('obj', 'thumbnail');

module.exports = LiveScreenshot;
