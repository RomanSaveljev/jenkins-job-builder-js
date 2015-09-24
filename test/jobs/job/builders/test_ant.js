var should = require('should');
var Ant = require('../../../../lib/jobs/job/builders/ant.js');
var Properties = require('../../../../lib/jobs/job/builders/ant/properties.js');
var testlib = require('../../../testlib.js');

describe('Ant', function() {
  describe('constructor', testlib.describeProxyConstructor(Ant));
  describe('object', testlib.describeProxyUppableAndable(Ant));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ant, 'targets'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ant, 'buildfile'));
  describe('properties', testlib.describeProxyObjectProperty(Ant, 'properties', Properties));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ant, 'ant-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ant, 'java-opts'));
});
