"use strict";

var util = require('../../../misc/util.js');
var File = require('./scp/file.js');

var Scp = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Scp.prototype, 'upper');
Scp.prototype.site = util.generatePrimitiveAccessor('obj', 'site');
Scp.prototype.files = util.generateObjectArrayAccessor('obj', 'files', File);

module.exports = Scp;
