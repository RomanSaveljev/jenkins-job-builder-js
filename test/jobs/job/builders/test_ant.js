var should = require('should');
var Ant = require('../../../../lib/jobs/job/builders/ant.js');
var testlib = require('../../../testlib.js');

describe('Ant', function() {
  describe('constructor', testlib.describeProxyConstructor(Ant));
  describe('object', testlib.describeProxyUppableAndable(Ant));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ant, 'targets'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ant, 'buildfile'));
  // TODO: not implemented
  //describe('properties', testlib.describeProxyPrimitiveProperty(Ant, 'properties'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ant, 'ant-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ant, 'java-opts'));
});
