/*!
* ssh-agent-credentials - lib/wrappers/ssh-agent-credentials.js
* Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
* MIT Licensed
*/

"use strict";

/**
 * Module dependencies.
 */
var util = require('../../../misc/util.js');

var SshAgentCredentials = function(upper, sshAgentCredentials) {
  this.upper = upper;
  this.sshAgentCredentials = sshAgentCredentials;
};
util.makeUppable(SshAgentCredentials.prototype, 'upper');
SshAgentCredentials.prototype.users = util.generatePrimitiveArrayAccessor('sshAgentCredentials', 'users');

module.exports = SshAgentCredentials;
