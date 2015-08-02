var should = require('should');
var Thresholds = require('../../../../../lib/jobs/job/publishers/checkstyle/thresholds.js');
var testlib = require('../../../../testlib.js');
var Threshold = require('../../../../../lib/jobs/job/publishers/checkstyle/threshold.js');

describe('Thresholds', function() {
  describe('constructor', testlib.describeProxyConstructor(Thresholds));
  describe('object', testlib.describeProxyUppableAndable(Thresholds));
  describe('properties', testlib.describeProxyObjectProperty(Thresholds, 'unstable', Threshold));
  describe('properties', testlib.describeProxyObjectProperty(Thresholds, 'failed', Threshold));
});
