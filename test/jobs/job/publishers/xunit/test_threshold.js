var should = require('should');
var Threshold = require('../../../../../lib/jobs/job/publishers/xunit/threshold.js');
var testlib = require('../../../../testlib.js');

describe('Threshold', function() {
  describe('constructor', testlib.describeProxyConstructor(Threshold));
  describe('object', testlib.describeProxyUppableAndable(Threshold));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'unstable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'unstablenew'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'failure'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'failurenew'));
});
