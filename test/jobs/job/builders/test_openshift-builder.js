var should = require('should');
var OpenShiftBuilder = require('../../../../lib/jobs/job/builders/openshift-builder.js');
var testlib = require('../../../testlib.js');

describe('OpenShiftBuilder', function() {
  describe('constructor', testlib.describeProxyConstructor(OpenShiftBuilder));
  describe('object', testlib.describeProxyUppableAndable(OpenShiftBuilder));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftBuilder, 'api-url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftBuilder, 'bld-cfg'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftBuilder, 'namespace'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftBuilder, 'auth-token'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftBuilder, 'commit-ID'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftBuilder, 'verbose'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftBuilder, 'build-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftBuilder, 'show-build-logs'));
});
