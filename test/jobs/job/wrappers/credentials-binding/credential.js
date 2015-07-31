var should = require('should');
var Credential = require('../../../../../lib/jobs/job/wrappers/credentials-binding/credential.js');
var testlib = require('../../../../testlib.js');

describe('Credential', function() {
  describe('constructor', testlib.describeProxyConstructor(Credential));
  describe('object', testlib.describeProxyUppableAndable(Credential));
  describe('properties', testlib.describeObjectProxyProperty(Credential, 'credentialId', 'credential-id'));
  describe('properties', testlib.describeObjectProxyProperty(Credential, 'variable'));
});
