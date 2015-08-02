var should = require('should');
var Branch = require('../../../../../lib/jobs/job/publishers/git/branch.js');
var testlib = require('../../../../testlib.js');

describe('Branch', function() {
  describe('constructor', testlib.describeProxyConstructor(Branch));
  describe('object', testlib.describeProxyUppableAndable(Branch));
  describe('properties', testlib.describeProxyPrimitiveProperty(Branch, 'remote'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Branch, 'name'));
});
