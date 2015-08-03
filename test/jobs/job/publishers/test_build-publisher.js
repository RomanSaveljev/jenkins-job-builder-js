var should = require('should');
var BuildPublisher = require('../../../../lib/jobs/job/publishers/build-publisher.js');
var testlib = require('../../../testlib.js');

describe('BuildPublisher', function() {
  describe('constructor', testlib.describeProxyConstructor(BuildPublisher));
  describe('object', testlib.describeProxyUppableAndable(BuildPublisher));
  describe('properties', testlib.describeProxyPrimitiveProperty(BuildPublisher, 'publish-unstable-builds'));
  describe('properties', testlib.describeProxyPrimitiveProperty(BuildPublisher, 'publish-failed-builds'));
  describe('properties', testlib.describeProxyPrimitiveProperty(BuildPublisher, 'days-to-keep'));
  describe('properties', testlib.describeProxyPrimitiveProperty(BuildPublisher, 'num-to-keep'));
});
