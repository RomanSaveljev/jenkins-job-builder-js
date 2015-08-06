var should = require('should');
var JobLogLogger = require('../../../../lib/jobs/job/wrappers/job-log-logger.js');
var testlib = require('../../../testlib.js');

describe('JobLogLogger', function() {
  describe('constructor', testlib.describeProxyConstructor(JobLogLogger));
  describe('object', testlib.describeProxyUppableAndable(JobLogLogger));
  describe('properties', testlib.describeProxyPrimitiveProperty(JobLogLogger, 'suppress-empty'));
});
