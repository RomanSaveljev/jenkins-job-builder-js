var should = require('should');
var OpenShiftImgStreams = require('../../../../lib/jobs/job/scm/openshift-img-streams.js');
var testlib = require('../../../testlib.js');

describe('OpenShiftImgStreams', function() {
  describe('constructor', testlib.describeProxyConstructor(OpenShiftImgStreams));
  describe('object', testlib.describeProxyUppableAndable(OpenShiftImgStreams));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftImgStreams, 'image-stream-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftImgStreams, 'tag'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftImgStreams, 'api-url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftImgStreams, 'namespace'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftImgStreams, 'auth-token'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftImgStreams, 'verbose'));
});
