var should = require('should');
var Instance = require('../../../../../lib/jobs/job/wrappers/jclouds/instance.js');
var testlib = require('../../../../testlib.js');

describe('Instance', function() {
  describe('constructor', testlib.describeProxyConstructor(Instance));
  describe('object', testlib.describeProxyUppableAndable(Instance));
  describe('properties', testlib.describeProxyPrimitiveProperty(Instance, 'cloud-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Instance, 'count'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Instance, 'stop-on-terminate'));
});
