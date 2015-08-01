var should = require('should');
var SshAgentCredentials = require('../../../../lib/jobs/job/wrappers/ssh-agent-credentials.js');
var testlib = require('../../../testlib.js');

describe('SshAgentCredentials', function() {
  describe('constructor', testlib.describeProxyConstructor(SshAgentCredentials));
  describe('object', testlib.describeProxyUppableAndable(SshAgentCredentials));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(SshAgentCredentials, 'users'));
});
