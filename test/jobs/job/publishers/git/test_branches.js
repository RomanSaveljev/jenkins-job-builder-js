var should = require('should');
var Branches = require('../../../../../lib/jobs/job/publishers/git/branches.js');
var testlib = require('../../../../testlib.js');
var Branch = require('../../../../../lib/jobs/job/publishers/git/branch.js');

describe('Branches', function() {
  describe('constructor', testlib.describeProxyConstructor(Branches));
  describe('object', testlib.describeProxyUppableAndable(Branches));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Branches, 'branch', Branch));
});
