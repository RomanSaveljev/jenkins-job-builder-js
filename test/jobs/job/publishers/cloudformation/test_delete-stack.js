var should = require('should');
var DeleteStack = require('../../../../../lib/jobs/job/publishers/cloudformation/delete-stack.js');
var testlib = require('../../../../testlib.js');

describe('DeleteStack', function() {
  describe('constructor', testlib.describeProxyConstructor(DeleteStack));
  describe('object', testlib.describeProxyUppableAndable(DeleteStack));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(DeleteStack, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DeleteStack, 'access-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DeleteStack, 'secret-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DeleteStack, 'prefix'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DeleteStack, 'region'));
});
