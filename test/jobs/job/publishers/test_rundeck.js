var should = require('should');
var Rundeck = require('../../../../lib/jobs/job/publishers/rundeck.js');
var testlib = require('../../../testlib.js');

describe('Rundeck', function() {
  describe('constructor', testlib.describeProxyConstructor(Rundeck));
  describe('object', testlib.describeProxyUppableAndable(Rundeck));
  describe('properties', testlib.describeProxyPrimitiveProperty(Rundeck, 'job-id'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Rundeck, 'options'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Rundeck, 'node-filters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Rundeck, 'tag'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Rundeck, 'wait-for-rundeck'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Rundeck, 'fail-the-build'));
});
