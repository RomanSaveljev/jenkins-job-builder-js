var should = require('should');
var MongoDb = require('../../../../lib/jobs/job/wrappers/mongo-db.js');
var testlib = require('../../../testlib.js');

describe('MongoDb', function() {
  describe('constructor', testlib.describeProxyConstructor(MongoDb));
  describe('object', testlib.describeProxyUppableAndable(MongoDb));
  describe('properties', testlib.describeProxyPrimitiveProperty(MongoDb, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MongoDb, 'data-directory'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MongoDb, 'port'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MongoDb, 'startup-params'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MongoDb, 'start-timeout'));  
});
