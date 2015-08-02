var should = require('should');
var Sonar = require('../../../../lib/jobs/job/publishers/sonar.js');
var testlib = require('../../../testlib.js');
var SkipGlobalTriggers = require('../../../../lib/jobs/job/publishers/sonar/skip-global-triggers.js');

describe('Sonar', function() {
  describe('constructor', testlib.describeProxyConstructor(Sonar));
  describe('object', testlib.describeProxyUppableAndable(Sonar));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sonar, 'jdk'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sonar, 'branch'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sonar, 'language'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sonar, 'maven-opts'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sonar, 'additional-properties'));
  describe('properties', testlib.describeProxyObjectProperty(Sonar, 'skip-global-triggers', SkipGlobalTriggers));
});
