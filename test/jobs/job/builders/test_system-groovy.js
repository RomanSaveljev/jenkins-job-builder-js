var should = require('should');
var SystemGroovy = require('../../../../lib/jobs/job/builders/system-groovy.js');
var testlib = require('../../../testlib.js');

describe('SystemGroovy', function() {
  describe('constructor', testlib.describeProxyConstructor(SystemGroovy));
  describe('object', testlib.describeProxyUppableAndable(SystemGroovy));
  describe('properties', testlib.describeProxyPrimitiveProperty(SystemGroovy, 'file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SystemGroovy, 'command'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SystemGroovy, 'bindings'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SystemGroovy, 'class-path'));
});
