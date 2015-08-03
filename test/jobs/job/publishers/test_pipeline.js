var should = require('should');
var Pipeline = require('../../../../lib/jobs/job/publishers/pipeline.js');
var testlib = require('../../../testlib.js');

describe('Pipeline', function() {
  describe('constructor', testlib.describeProxyConstructor(Pipeline));
  describe('object', testlib.describeProxyUppableAndable(Pipeline));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pipeline, 'project'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pipeline, 'predefined-parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pipeline, 'current-parameters'));
});
