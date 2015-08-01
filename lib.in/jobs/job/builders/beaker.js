"use strict";

var util = require('../../../misc/util.js');

var Beaker = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Beaker.prototype, 'upper');
Beaker.prototype.content = util.generatePrimitiveAccessor('obj', 'content');
Beaker.prototype.path = util.generatePrimitiveAccessor('obj', 'path');
Beaker.prototype.downloadLogs = util.generatePrimitiveAccessor('obj', 'download-logs');

module.exports = Beaker;
