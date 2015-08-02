var should = require('should');
var PrioritySorter = require('../../../../lib/jobs/job/properties/priority-sorter.js');
var testlib = require('../../../testlib.js');

describe('PrioritySorter', function() {
  describe('constructor', testlib.describeProxyConstructor(PrioritySorter));
  describe('object', testlib.describeProxyUppableAndable(PrioritySorter));
  describe('properties', testlib.describeProxyPrimitiveProperty(PrioritySorter, 'priority'));
});
