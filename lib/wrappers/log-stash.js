"use strict";

var util = require('../util.js');
var Redis = require('./log-stash/redis.js');

var LogStash = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(LogStash.prototype, 'upper');
LogStash.prototype.useRedis = util.generatePrimitiveArrayAccessor('obj', 'use-redis');
LogStash.prototype.redis = util.generateObjectAccessor('obj', 'redis', Redis);

module.exports = LogStash;
