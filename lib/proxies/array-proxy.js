"use strict";

var util = require('../util.js');

var acceptedTypes = ['number', 'string'];

var ArrayProxy = function(upper, array) {
  this.upper = upper;
  this.array = array;
};

util.makeUppable(ArrayProxy.prototype, 'upper');
ArrayProxy.prototype.set = function(element) {
  if (element !== undefined && element != null) {
    if (acceptedTypes.indexOf(typeof(element)) == -1) {
      throw new Error('ArrayProxy does not support ' + typeof(element));
    }
    if (this.array.indexOf(element) == -1) {
      this.array.push(element);
    }
    return this;
  }
};

module.exports = ArrayProxy;
