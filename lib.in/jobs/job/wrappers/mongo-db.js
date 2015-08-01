"use strict";

var util = require('../../../misc/util.js');

var MongoDb = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(MongoDb.prototype, 'upper');
MongoDb.prototype.name = util.generatePrimitiveArrayAccessor('obj', 'name');
MongoDb.prototype.dataDirectory = util.generatePrimitiveArrayAccessor('obj', 'data-directory');
MongoDb.prototype.port = util.generatePrimitiveArrayAccessor('obj', 'port');
MongoDb.prototype.startupParams = util.generatePrimitiveArrayAccessor('obj', 'startup-params');
MongoDb.prototype.startTimeout = util.generatePrimitiveArrayAccessor('obj', 'start-timeout');

module.exports = MongoDb;
