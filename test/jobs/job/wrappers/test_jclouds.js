var should = require('should');
var Jclouds = require('../../../../lib/jobs/job/wrappers/jclouds.js');
var testlib = require('../../../testlib.js');
var Instances = require('../../../../lib/jobs/job/wrappers/jclouds/instances.js');

describe('Jclouds', function() {
  describe('constructor', testlib.describeProxyConstructor(Jclouds));
  describe('object', testlib.describeProxyUppableAndable(Jclouds));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jclouds, 'single-use'));
  describe('properties', testlib.describeProxyCustomArrayProperty(Jclouds, 'instances', Instances));
});
