var should = require('should');
var OpenShiftImgTagger = require('../../../../lib/jobs/job/builders/openshift-img-tagger.js');
var testlib = require('../../../testlib.js');

describe('OpenShiftImgTagger', function() {
  describe('constructor', testlib.describeProxyConstructor(OpenShiftImgTagger));
  describe('object', testlib.describeProxyUppableAndable(OpenShiftImgTagger));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftImgTagger, 'api-url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftImgTagger, 'test-tag'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftImgTagger, 'prod-tag'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftImgTagger, 'namespace'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftImgTagger, 'auth-token'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftImgTagger, 'verbose'));
});
