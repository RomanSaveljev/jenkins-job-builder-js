var should = require('should');
var HeavyJob = require('../../../../lib/jobs/job/properties/heavy-job.js');
var testlib = require('../../../testlib.js');

describe('HeavyJob', function() {
  describe('constructor', testlib.describeProxyConstructor(HeavyJob));
  describe('object', testlib.describeProxyUppableAndable(HeavyJob));
  describe('properties', testlib.describeProxyPrimitiveProperty(HeavyJob, 'weight'));
});
