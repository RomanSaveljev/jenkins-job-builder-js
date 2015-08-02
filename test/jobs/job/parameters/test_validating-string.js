var should = require('should');
var ValidatingString = require('../../../../lib/jobs/job/parameters/validating-string.js');
var testlib = require('../../../testlib.js');

describe('ValidatingString', function() {
  describe('constructor', testlib.describeProxyConstructor(ValidatingString));
  describe('object', testlib.describeProxyUppableAndable(ValidatingString));
  describe('properties', testlib.describeProxyPrimitiveProperty(ValidatingString, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ValidatingString, 'description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ValidatingString, 'default'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ValidatingString, 'regex'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ValidatingString, 'msg'));
});
