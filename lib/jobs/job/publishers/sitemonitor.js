"use strict";

var util = require('../../../misc/util.js');
var Site = require('./sitemonitor/site.js');

var SiteMonitor = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(SiteMonitor.prototype, 'upper');
SiteMonitor.prototype.sites = util.generateObjectArrayAccessor('obj', 'sites', Site);

module.exports = SiteMonitor;
