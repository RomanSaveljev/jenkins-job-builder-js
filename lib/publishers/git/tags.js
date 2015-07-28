"use strict";

var util = require('../../util.js');
var Tag = require('./tag.js');

var Tags = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(Tags.prototype, 'upper');
Tags.prototype.tag = util.generateKeyedObjectElementAccessor('obj', 'tag', Tag);

module.exports = Tags;
