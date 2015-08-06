var should = require('should');
var Redis = require('../../../../../lib/jobs/job/wrappers/logstash/redis.js');
var testlib = require('../../../../testlib.js');

describe('Redis', function() {
  describe('constructor', testlib.describeProxyConstructor(Redis));
  describe('object', testlib.describeProxyUppableAndable(Redis));
  describe('properties', testlib.describeProxyPrimitiveProperty(Redis, 'host'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Redis, 'port'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Redis, 'database-number'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Redis, 'database-password'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Redis, 'data-type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Redis, 'key'));
});
