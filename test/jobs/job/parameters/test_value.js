var should = require('should');
var Value = require('../../../../lib/jobs/job/parameters/value.js');
var testlib = require('../../../testlib.js');

describe('Value', function() {
  describe('constructor', testlib.describeProxyConstructor(Value));
  describe('object', testlib.describeProxyUppableAndable(Value));
  describe('properties', testlib.describeProxyPrimitiveProperty(Value, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Value, 'description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Value, 'default'));
});
