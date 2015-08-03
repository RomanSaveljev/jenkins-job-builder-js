var should = require('should');
var Merge = require('../../../../../lib/jobs/job/scm/git/merge.js');
var testlib = require('../../../../testlib.js');

describe('Merge', function() {
  describe('constructor', testlib.describeProxyConstructor(Merge));
  describe('object', testlib.describeProxyUppableAndable(Merge));
  describe('properties', testlib.describeProxyPrimitiveProperty(Merge, 'remote'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Merge, 'branch'));
});
