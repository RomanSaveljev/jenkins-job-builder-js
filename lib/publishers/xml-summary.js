"use strict";

var util = require('../util.js');

var XmlSummary = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(XmlSummary.prototype, 'upper');
XmlSummary.prototype.files = util.generatePrimitiveAccessor('obj', 'files');
XmlSummary.prototype.shownOnProjectPage = util.generatePrimitiveAccessor('obj', 'shown-on-project-page');

module.exports = XmlSummary;
