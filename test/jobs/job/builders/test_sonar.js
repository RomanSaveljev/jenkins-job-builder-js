var should = require('should');
var Sonar = require('../../../../lib/jobs/job/builders/sonar.js');
var testlib = require('../../../testlib.js');

describe('Sonar', function() {
  describe('constructor', testlib.describeProxyConstructor(Sonar));
  describe('object', testlib.describeProxyUppableAndable(Sonar));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sonar, 'sonar-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sonar, 'task'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sonar, 'project'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sonar, 'properties'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sonar, 'java-opts'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Sonar, 'jdk'));
});
