"use strict";

var util = require('../../../../misc/util.js');

var Redis = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Redis.prototype, 'upper');
Redis.prototype.host = util.generatePrimitiveArrayAccessor('obj', 'host');
Redis.prototype.port = util.generatePrimitiveArrayAccessor('obj', 'port');
Redis.prototype.databaseNumber = util.generatePrimitiveArrayAccessor('obj', 'database-number');
Redis.prototype.databasePassword = util.generatePrimitiveArrayAccessor('obj', 'database-password');
Redis.prototype.dataType = util.generatePrimitiveArrayAccessor('obj', 'data-type');
Redis.prototype.key = util.generatePrimitiveArrayAccessor('obj', 'key');

module.exports = Redis;
