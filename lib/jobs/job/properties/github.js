"use strict";

var util = require('../../../misc/util.js');

var Github = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Github.prototype, 'upper');
Github.prototype.url = util.generatePrimitiveAccessor('obj', 'url');

module.exports = Github;
