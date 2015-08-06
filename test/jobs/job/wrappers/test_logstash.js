var should = require('should');
var LogStash = require('../../../../lib/jobs/job/wrappers/logstash.js');
var testlib = require('../../../testlib.js');
var Redis = require('../../../../lib/jobs/job/wrappers/logstash/redis.js');

describe('LogStash', function() {
  describe('constructor', testlib.describeProxyConstructor(LogStash));
  describe('object', testlib.describeProxyUppableAndable(LogStash));
  describe('properties', testlib.describeProxyPrimitiveProperty(LogStash, 'use-redis'));
  describe('properties', testlib.describeProxyObjectProperty(LogStash, 'redis', Redis));
});
