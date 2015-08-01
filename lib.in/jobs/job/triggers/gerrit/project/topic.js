"use strict";

var util = require('../../../../../misc/util.js');

var Topic = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Topic.prototype, 'upper');
Topic.prototype.compareType = util.generatePrimitiveAccessor('obj', 'compare-type');
Topic.prototype.pattern = util.generatePrimitiveAccessor('obj', 'pattern');

module.exports = Topic;
