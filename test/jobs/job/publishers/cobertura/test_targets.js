var should = require('should');
var Targets = require('../../../../../lib/jobs/job/publishers/cobertura/targets.js');
var testlib = require('../../../../testlib.js');
var Target = require('../../../../../lib/jobs/job/publishers/cobertura/target.js');

describe('Targets', function() {
  describe('constructor', testlib.describeProxyConstructor(Targets));
  describe('object', testlib.describeProxyUppableAndable(Targets));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'packages', Target));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'files', Target));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'classes', Target));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'method', Target));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'line', Target));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'conditional', Target));
});
