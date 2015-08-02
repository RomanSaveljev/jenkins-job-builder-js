var should = require('should');
var Targets = require('../../../../../lib/jobs/job/publishers/jacoco/targets.js');
var testlib = require('../../../../testlib.js');
var Target = require('../../../../../lib/jobs/job/publishers/jacoco/target.js');

describe('Targets', function() {
  describe('constructor', testlib.describeProxyConstructor(Targets));
  describe('object', testlib.describeProxyUppableAndable(Targets));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'instruction', Target));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'branch', Target));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'complexity', Target));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'line', Target));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'method', Target));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Targets, 'class', Target));
});
