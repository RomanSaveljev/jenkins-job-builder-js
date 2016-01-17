var should = require('should');
var OpenShiftDepVerify = require('../../../../lib/jobs/job/builders/openshift-dep-verify.js');
var testlib = require('../../../testlib.js');

describe('OpenShiftDepVerify', function() {
  describe('constructor', testlib.describeProxyConstructor(OpenShiftDepVerify));
  describe('object', testlib.describeProxyUppableAndable(OpenShiftDepVerify));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftDepVerify, 'api-url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftDepVerify, 'dep-cfg'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftDepVerify, 'namespace'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftDepVerify, 'replica-count'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftDepVerify, 'auth-token'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftDepVerify, 'verbose'));
});
