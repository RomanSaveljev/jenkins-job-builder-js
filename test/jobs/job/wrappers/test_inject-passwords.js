var should = require('should');
var InjectPasswords = require('../../../../lib/jobs/job/wrappers/inject-passwords.js');
var testlib = require('../../../testlib.js');
var JobPassword = require('../../../../lib/jobs/job/wrappers/inject-passwords/job-password.js');

describe('InjectPasswords', function() {
  describe('constructor', testlib.describeProxyConstructor(InjectPasswords));
  describe('object', testlib.describeProxyUppableAndable(InjectPasswords));
  describe('properties', testlib.describeProxyPrimitiveProperty(InjectPasswords, 'global'));
  describe('properties', testlib.describeProxyPrimitiveProperty(InjectPasswords, 'mask-password-params'));
  describe('properties', testlib.describeProxyObjectArrayProperty(InjectPasswords, 'job-passwords', JobPassword));
});
