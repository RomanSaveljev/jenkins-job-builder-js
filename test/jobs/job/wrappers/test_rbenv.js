var should = require('should');
var RbEnv = require('../../../../lib/jobs/job/wrappers/rbenv.js');
var testlib = require('../../../testlib.js');

describe('RbEnv', function() {
  describe('constructor', testlib.describeProxyConstructor(RbEnv));
  describe('object', testlib.describeProxyUppableAndable(RbEnv));
  describe('properties', testlib.describeProxyPrimitiveProperty(RbEnv, 'ruby-version'));
  describe('properties', testlib.describeProxyPrimitiveProperty(RbEnv, 'ignore-local-version'));
  describe('properties', testlib.describeProxyPrimitiveProperty(RbEnv, 'preinstall-gem-list'));
  describe('properties', testlib.describeProxyPrimitiveProperty(RbEnv, 'rbenv-root'));
  describe('properties', testlib.describeProxyPrimitiveProperty(RbEnv, 'rbenv-repo'));
  describe('properties', testlib.describeProxyPrimitiveProperty(RbEnv, 'rbenv-branch'));
  describe('properties', testlib.describeProxyPrimitiveProperty(RbEnv, 'ruby-build-repo'));
  describe('properties', testlib.describeProxyPrimitiveProperty(RbEnv, 'ruby-build-branch'));
});
