/*!
* ssh-agent-credentials - lib/wrappers/ssh-agent-credentials.js
* Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
* MIT Licensed
*/

"use strict";

/**
 * Module dependencies.
 */
var util = require('../util.js');

var SshAgentCredentials = function(upper, sshAgentCredentials) {
  this.upper = upper;
  this.sshAgentCredentials = sshAgentCredentials;
};
util.makeUppable(SshAgentCredentials.prototype, 'upper');
SshAgentCredentials.prototype.user = util.generateNestedAccessor('sshAgentCredentials', 'user');
SshAgentCredentials.prototype.users = util.generateToDoMember('need generic set interface');

module.exports = SshAgentCredentials;
