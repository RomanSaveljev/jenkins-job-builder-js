var should = require('should');
var Run = require('../../../../lib/jobs/job/parameters/run.js');
var testlib = require('../../../testlib.js');

describe('Run', function() {
  describe('constructor', testlib.describeProxyConstructor(Run));
  describe('object', testlib.describeProxyUppableAndable(Run));
  describe('properties', testlib.describeProxyPrimitiveProperty(Run, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Run, 'description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Run, 'project-name'));
});
