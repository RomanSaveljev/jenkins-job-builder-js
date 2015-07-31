"use strict";

var util = require('../../util.js');

var Remote = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Remote.prototype, 'upper');
Remote.prototype.url = util.generatePrimitiveAccessor('obj', 'url');
Remote.prototype.refspec = util.generatePrimitiveAccessor('obj', 'refspec');
Remote.prototype.credentialsId = util.generatePrimitiveAccessor('obj', 'credentials-id');

module.exports = Remote;
