var should = require('should');
var BlockThresholds = require('../../../../../lib/jobs/job/builders/project/block-thresholds.js');
var testlib = require('../../../../testlib.js');

describe('BlockThresholds', function() {
  describe('constructor', testlib.describeProxyConstructor(BlockThresholds));
  describe('object', testlib.describeProxyUppableAndable(BlockThresholds));
  describe('properties', testlib.describeProxyPrimitiveProperty(BlockThresholds, 'build-step-failure-threshold'));
  describe('properties', testlib.describeProxyPrimitiveProperty(BlockThresholds, 'unstable-threshold'));
  describe('properties', testlib.describeProxyPrimitiveProperty(BlockThresholds, 'failure-threshold'));
});
