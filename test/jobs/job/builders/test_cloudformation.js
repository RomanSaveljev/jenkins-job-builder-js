var should = require('should');
var CloudFormation = require('../../../../lib/jobs/job/builders/cloudformation.js');
var testlib = require('../../../testlib.js');

describe('CloudFormation', function() {
  describe('constructor', testlib.describeProxyConstructor(CloudFormation));
  describe('object', testlib.describeProxyUppableAndable(CloudFormation));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloudFormation, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloudFormation, 'description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloudFormation, 'recipe'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(CloudFormation, 'parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloudFormation, 'timeout'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloudFormation, 'access-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloudFormation, 'secret-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloudFormation, 'sleep'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloudFormation, 'region'));
});
