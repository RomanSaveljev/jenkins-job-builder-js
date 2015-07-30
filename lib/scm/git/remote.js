"use strict";

var util = require('../../util.js');

var Remote = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Remote.prototype, 'upper');
Remote.prototype.url = util.generatePrimtiveAccessor('obj', 'url');
Remote.prototype.refspec = util.generatePrimtiveAccessor('obj', 'refspec');
Remote.prototype.credentialsId = util.generatePrimtiveAccessor('obj', 'credentials-id');

module.exports = Remote;
