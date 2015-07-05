"use strict";

var acceptedTypes = ['number', 'string', 'object', 'boolean'];

var ArrayProxy = function(upper, array) {
  this.upper = upper;
  this.array = array;
};

// can not require util.js, because this leads to circular dependencies
ArrayProxy.prototype.up = function() {
  return this.upper;
};
ArrayProxy.prototype.and = ArrayProxy.prototype.up;
ArrayProxy.prototype.add = function(element) {
  if (element !== undefined && element != null) {
    if (acceptedTypes.indexOf(typeof(element)) == -1) {
      throw new Error('ArrayProxy does not support ' + typeof(element));
    }
    this.array.push(element);
    return this;
  }
};

module.exports = ArrayProxy;
