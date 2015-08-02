var should = require('should');
var SshBuilder = require('../../../../lib/jobs/job/builders/ssh-builder.js');
var testlib = require('../../../testlib.js');

describe('SshBuilder', function() {
  describe('constructor', testlib.describeProxyConstructor(SshBuilder));
  describe('object', testlib.describeProxyUppableAndable(SshBuilder));
  describe('properties', testlib.describeProxyPrimitiveProperty(SshBuilder, 'ssh-user-ip'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SshBuilder, 'command'));
});
