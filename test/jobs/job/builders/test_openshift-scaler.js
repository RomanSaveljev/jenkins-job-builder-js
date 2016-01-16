var should = require('should');
var OpenShiftScaler = require('../../../../lib/jobs/job/builders/openshift-scaler.js');
var testlib = require('../../../testlib.js');

describe('OpenShiftScaler', function() {
  describe('constructor', testlib.describeProxyConstructor(OpenShiftScaler));
  describe('object', testlib.describeProxyUppableAndable(OpenShiftScaler));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftScaler, 'api-url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftScaler, 'dep-cfg'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftScaler, 'namespace'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftScaler, 'replica-count'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftScaler, 'auth-token'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftScaler, 'verbose'));
});
