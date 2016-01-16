var should = require('should');
var CreateStack = require('../../../../../lib/jobs/job/publishers/cloudformation/create-stack.js');
var testlib = require('../../../../testlib.js');

describe('CreateStack', function() {
  describe('constructor', testlib.describeProxyConstructor(CreateStack));
  describe('object', testlib.describeProxyUppableAndable(CreateStack));
  describe('properties', testlib.describeProxyPrimitiveProperty(CreateStack, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CreateStack, 'description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CreateStack, 'recipe'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(CreateStack, 'parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CreateStack, 'timeout'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CreateStack, 'access-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CreateStack, 'secret-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CreateStack, 'sleep'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CreateStack, 'region'));
});
