var should = require('should');
var NewThresholds = require('../../../../../lib/jobs/job/publishers/warnings/new-thresholds.js');
var testlib = require('../../../../testlib.js');
var NewThreshold = require('../../../../../lib/jobs/job/publishers/warnings/new-threshold.js');

describe('NewThresholds', function() {
  describe('constructor', testlib.describeProxyConstructor(NewThresholds));
  describe('object', testlib.describeProxyUppableAndable(NewThresholds));
  describe('properties', testlib.describeProxyObjectProperty(NewThresholds, 'unstable', NewThreshold));
  describe('properties', testlib.describeProxyObjectProperty(NewThresholds, 'failed', NewThreshold));
});
