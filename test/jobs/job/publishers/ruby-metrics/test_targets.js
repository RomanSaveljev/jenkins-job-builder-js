var should = require('should');
var Targets = require('../../../../../lib/jobs/job/publishers/ruby-metrics/targets.js');
var testlib = require('../../../../testlib.js');
var Target = require('../../../../../lib/jobs/job/publishers/ruby-metrics/target.js');

describe('Targets', function() {
  describe('constructor', testlib.describeProxyConstructor(Targets));
  describe('object', testlib.describeProxyUppableAndable(Targets));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'total-coverage', Target));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'code-coverage', Target));
});
