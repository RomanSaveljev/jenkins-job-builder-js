"use strict";

var util = require('../util.js');
var Credential = require('credentials-binding/credentials.js');

var CredentialsBinding = function(upper, array) {
  this.upper = upper;
  this.array = array;
  return this;
};

util.makeUppable(CredentialsBinding.prototype, 'upper');
CredentialsBinding.prototype.zipFile = util.generateObjectElementAccessor('array', 'zip-file', Credential);
CredentialsBinding.prototype.file = util.generateObjectElementAccessor('array', 'file', Credential);
CredentialsBinding.prototype.usernamePassword = util.generateObjectElementAccessor('array', 'username-password', Credential);
CredentialsBinding.prototype.text = util.generateObjectElementAccessor('array', 'text', Credential);