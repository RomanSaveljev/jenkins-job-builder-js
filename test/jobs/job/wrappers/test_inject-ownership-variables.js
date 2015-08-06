var should = require('should');
var InjectOwnershipVariables = require('../../../../lib/jobs/job/wrappers/inject-ownership-variables.js');
var testlib = require('../../../testlib.js');

describe('InjectOwnershipVariables', function() {
  describe('constructor', testlib.describeProxyConstructor(InjectOwnershipVariables));
  describe('object', testlib.describeProxyUppableAndable(InjectOwnershipVariables));
  describe('properties', testlib.describeProxyPrimitiveProperty(InjectOwnershipVariables, 'job-variables'));
  describe('properties', testlib.describeProxyPrimitiveProperty(InjectOwnershipVariables, 'node-variables'));
});
