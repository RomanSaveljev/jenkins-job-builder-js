var should = require('should');
var SshAgentCredentials = require('../lib/wrappers/ssh-agent-credentials.js');
var testlib = require('./testlib.js');

describe('SshAgentCredentials', function() {
  describe('constructor', testlib.describeObjectProxyConstructor(SshAgentCredentials));
  describe('object', testlib.describeObjectProxyUppableAndable(SshAgentCredentials));
  describe('properties', testlib.describeObjectProxyArrayProperty(SshAgentCredentials, 'users', 'users'));
});
