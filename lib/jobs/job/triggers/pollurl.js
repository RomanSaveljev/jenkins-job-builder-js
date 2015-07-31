"use strict";

var util = require('../../../misc/util.js');
var Url = require('./pollurl/url.js');

var PollUrl = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(PollUrl.prototype, 'upper');
PollUrl.prototype.cron = util.generatePrimitiveAccessor('obj', 'cron');
PollUrl.prototype.pollingNode = util.generatePrimitiveAccessor('obj', 'polling-node');
PollUrl.prototype.urls = util.generateObjectArrayAccessor('obj', 'urls', Url);

module.exports = PollUrl;
