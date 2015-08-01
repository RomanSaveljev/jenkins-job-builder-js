"use strict";

var util = require('../../misc/util.js');
var DateObject = require('./metadata/date.js');
var Primitive = require('./metadata/primitive.js');

var Metadata = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(Metadata.prototype, 'upper');
Metadata.prototype.date = util.generateKeyedObjectElementAccessor('array', 'date', DateObject);
Metadata.prototype.number = util.generateKeyedObjectElementAccessor('array', 'number', Primitive);
Metadata.prototype.string = util.generateKeyedObjectElementAccessor('array', 'string', Primitive);

module.exports = Metadata;
