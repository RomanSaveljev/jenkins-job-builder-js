var should = require('should');
var DynamicScriptler = require('../../../../lib/jobs/job/parameters/dynamic-scriptler.js');
var testlib = require('../../../testlib.js');
var Parameter = require('../../../../lib/jobs/job/parameters/dynamic-scriptler/parameter.js');

describe('DynamicScriptler', function() {
  describe('constructor', testlib.describeProxyConstructor(DynamicScriptler));
  describe('object', testlib.describeProxyUppableAndable(DynamicScriptler));
  describe('properties', testlib.describeProxyPrimitiveProperty(DynamicScriptler, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DynamicScriptler, 'description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DynamicScriptler, 'script-id'));
  describe('properties', testlib.describeProxyObjectArrayProperty(DynamicScriptler, 'parameters', Parameter));
  describe('properties', testlib.describeProxyPrimitiveProperty(DynamicScriptler, 'remote'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DynamicScriptler, 'read-only'));
});
