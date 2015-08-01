"use strict";

var ObjectArrayProxy = function(upper, array, constructor) {
  this.upper = upper;
  this.array = array;
  this.constructor = constructor;
};

// can not require util.js, because this leads to circular dependencies
ObjectArrayProxy.prototype.up = function() {
  return this.upper;
};
ObjectArrayProxy.prototype.and = ObjectArrayProxy.prototype.up;
ObjectArrayProxy.prototype.create = function() {
  var obj = {};
  this.array.push(obj);
  return new constructor(this, obj);
};

module.exports = ObjectArrayProxy;
