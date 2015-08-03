var should = require('should');
var LogParser = require('../../../../lib/jobs/job/publishers/logparser.js');
var testlib = require('../../../testlib.js');

describe('LogParser', function() {
  describe('constructor', testlib.describeProxyConstructor(LogParser));
  describe('object', testlib.describeProxyUppableAndable(LogParser));
  describe('properties', testlib.describeProxyPrimitiveProperty(LogParser, 'parse-rules'));
  describe('properties', testlib.describeProxyPrimitiveProperty(LogParser, 'unstable-on-warning'));
  describe('properties', testlib.describeProxyPrimitiveProperty(LogParser, 'fail-on-error'));
});
