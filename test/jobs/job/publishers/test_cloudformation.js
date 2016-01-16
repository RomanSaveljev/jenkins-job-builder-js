var should = require('should');
var CloudFormation = require('../../../../lib/jobs/job/publishers/cloudformation.js');
var testlib = require('../../../testlib.js');
var CreateStack = require('../../../../lib/jobs/job/publishers/cloudformation/create-stack.js');
var DeleteStack = require('../../../../lib/jobs/job/publishers/cloudformation/delete-stack.js');

describe('CloudFormation', function() {
  describe('constructor', testlib.describeProxyConstructor(CloudFormation));
  describe('object', testlib.describeProxyUppableAndable(CloudFormation));
  describe('properties', testlib.describeProxyObjectArrayProperty(CloudFormation, 'create-stacks', CreateStack));
  describe('properties', testlib.describeProxyObjectArrayProperty(CloudFormation, 'delete-stacks', DeleteStack));
});
