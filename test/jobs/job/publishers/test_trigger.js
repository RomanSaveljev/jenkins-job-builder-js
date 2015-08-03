var should = require('should');
var Trigger = require('../../../../lib/jobs/job/publishers/trigger.js');
var testlib = require('../../../testlib.js');

describe('Trigger', function() {
  describe('constructor', testlib.describeProxyConstructor(Trigger));
  describe('object', testlib.describeProxyUppableAndable(Trigger));
  describe('properties', testlib.describeProxyPrimitiveProperty(Trigger, 'project'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Trigger, 'threshold'));
});
