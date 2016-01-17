var should = require('should');
var OpenShiftBuildVerify = require('../../../../lib/jobs/job/builders/openshift-build-verify.js');
var testlib = require('../../../testlib.js');

describe('OpenShiftBuildVerify', function() {
  describe('constructor', testlib.describeProxyConstructor(OpenShiftBuildVerify));
  describe('object', testlib.describeProxyUppableAndable(OpenShiftBuildVerify));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftBuildVerify, 'api-url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftBuildVerify, 'bld-cfg'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftBuildVerify, 'namespace'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftBuildVerify, 'auth-token'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftBuildVerify, 'verbose'));
});
