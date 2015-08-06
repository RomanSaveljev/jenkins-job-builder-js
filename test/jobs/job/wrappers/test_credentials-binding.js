var should = require('should');
var CredentialsBinding = require('../../../../lib/jobs/job/wrappers/credentials-binding.js');
var testlib = require('../../../testlib.js');
var Credential = require('../../../../lib/jobs/job/wrappers/credentials-binding/credential.js');

describe('CredentialsBinding', function() {
  describe('constructor', testlib.describeProxyConstructor(CredentialsBinding));
  describe('object', testlib.describeProxyUppableAndable(CredentialsBinding));
  describe('properties', testlib.describeProxyKeyedObjectProperty(CredentialsBinding, 'zip-file', Credential));
  describe('properties', testlib.describeProxyKeyedObjectProperty(CredentialsBinding, 'file', Credential));
  describe('properties', testlib.describeProxyKeyedObjectProperty(CredentialsBinding, 'username-password', Credential));
  describe('properties', testlib.describeProxyKeyedObjectProperty(CredentialsBinding, 'text', Credential));
});
