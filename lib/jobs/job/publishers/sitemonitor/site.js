"use strict";

var util = require('../../../../misc/util.js');

var Site = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Site.prototype, 'upper');
Site.prototype.url = util.generatePrimitiveAccessor('obj', 'url');

module.exports = Site;
