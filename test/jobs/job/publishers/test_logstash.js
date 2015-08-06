var should = require('should');
var LogStash = require('../../../../lib/jobs/job/publishers/logstash.js');
var testlib = require('../../../testlib.js');

describe('LogStash', function() {
  describe('constructor', testlib.describeProxyConstructor(LogStash));
  describe('object', testlib.describeProxyUppableAndable(LogStash));
  describe('properties', testlib.describeProxyPrimitiveProperty(LogStash, 'max-lines'));
  describe('properties', testlib.describeProxyPrimitiveProperty(LogStash, 'fail-build'));
});
