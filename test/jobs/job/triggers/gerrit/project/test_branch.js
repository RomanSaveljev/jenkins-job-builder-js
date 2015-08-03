var should = require('should');
var Branch = require('../../../../../../lib/jobs/job/triggers/gerrit/project/branch.js');
var testlib = require('../../../../../testlib.js');

describe('Branch', function() {
  describe('constructor', testlib.describeProxyConstructor(Branch));
  describe('object', testlib.describeProxyUppableAndable(Branch));
  describe('properties', testlib.describeProxyPrimitiveProperty(Branch, 'branch-compare-type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Branch, 'branch-pattern'));
});
