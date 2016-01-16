var should = require('should');
var OpenShiftSvcVerify = require('../../../../lib/jobs/job/builders/openshift-svc-verify.js');
var testlib = require('../../../testlib.js');

describe('OpenShiftSvcVerify', function() {
  describe('constructor', testlib.describeProxyConstructor(OpenShiftSvcVerify));
  describe('object', testlib.describeProxyUppableAndable(OpenShiftSvcVerify));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftSvcVerify, 'api-url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftSvcVerify, 'svc-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftSvcVerify, 'namespace'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftSvcVerify, 'auth-token'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftSvcVerify, 'verbose'));
});
