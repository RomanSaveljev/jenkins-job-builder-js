"use strict";

var util = require('../../util.js');

var Credential = function(upper, credential) {
  this.upper = upper;
  this.credential = credential;
};
util.makeUppable(Credential.prototype, 'upper');
Credential.prototype.credentialId = util.generatePrimitiveAccessor('credential', 'credential-id');
Credential.prototype.variable = util.generatePrimitiveAccessor('credential', 'variable');

module.exports = Credential;
