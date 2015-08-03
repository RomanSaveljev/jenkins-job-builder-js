var should = require('should');
var TotalThresholds = require('../../../../../lib/jobs/job/publishers/warnings/total-thresholds.js');
var testlib = require('../../../../testlib.js');
var TotalThrehold = require('../../../../../lib/jobs/job/publishers/warnings/total-threshold.js');

describe('TotalThresholds', function() {
  describe('constructor', testlib.describeProxyConstructor(TotalThresholds));
  describe('object', testlib.describeProxyUppableAndable(TotalThresholds));
  describe('properties', testlib.describeProxyObjectProperty(TotalThresholds, 'unstable', TotalThrehold));
  describe('properties', testlib.describeProxyObjectProperty(TotalThresholds, 'failed', TotalThrehold));
});
