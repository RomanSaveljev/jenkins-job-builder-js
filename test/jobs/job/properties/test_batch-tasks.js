var should = require('should');
var BatchTasks = require('../../../../lib/jobs/job/properties/batch-tasks.js');
var testlib = require('../../../testlib.js');

describe('BatchTasks', function() {
  describe('constructor', testlib.describeProxyConstructor(BatchTasks));
  describe('object', testlib.describeProxyUppableAndable(BatchTasks));
  describe('properties', testlib.describeProxyPrimitiveProperty(BatchTasks, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(BatchTasks, 'script'));
});
