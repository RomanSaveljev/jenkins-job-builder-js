var should = require('should');
var Sbt = require('../../../../lib/jobs/job/builders/sbt.js');
var testlib = require('../../../testlib.js');

describe('Sbt', function() {
  describe('constructor', testlib.describeProxyConstructor(Sbt));
  describe('object', testlib.describeProxyUppableAndable(Sbt));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sbt, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sbt, 'jvm-flags'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sbt, 'actions'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sbt, 'sbt-flags'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sbt, 'subdir-path'));
});
