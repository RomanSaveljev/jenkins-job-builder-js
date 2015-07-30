"use strict";

var util = require('../../util.js');

var Site = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Site.prototype, 'upper');
Site.prototype.url = util.generatePrimtiveAccessor('obj', 'url');

module.exports = Site;
