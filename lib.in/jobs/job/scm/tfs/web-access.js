"use strict";

var util = require('../../../../misc/util.js');

var WebAccess = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(WebAccess.prototype, 'upper');
WebAccess.prototype.webUrl = util.generatePrimitiveAccessor('obj', 'web-url');

module.exports = WebAccess;
