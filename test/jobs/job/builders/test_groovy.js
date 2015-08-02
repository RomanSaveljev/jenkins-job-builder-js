var should = require('should');
var Groovy = require('../../../../lib/jobs/job/builders/groovy.js');
var testlib = require('../../../testlib.js');

describe('Groovy', function() {
  describe('constructor', testlib.describeProxyConstructor(Groovy));
  describe('object', testlib.describeProxyUppableAndable(Groovy));
  describe('properties', testlib.describeProxyPrimitiveProperty(Groovy, 'file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Groovy, 'command'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Groovy, 'version'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Groovy, 'parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Groovy, 'script-parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Groovy, 'properties'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Groovy, 'java-opts'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Groovy, 'class-path'));
});
