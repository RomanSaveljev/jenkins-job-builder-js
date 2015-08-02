var should = require('should');
var Dynamic = require('../../../../lib/jobs/job/parameters/dynamic.js');
var testlib = require('../../../testlib.js');

describe('Dynamic', function() {
  describe('constructor', testlib.describeProxyConstructor(Dynamic));
  describe('object', testlib.describeProxyUppableAndable(Dynamic));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dynamic, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dynamic, 'description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dynamic, 'script'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dynamic, 'remote'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dynamic, 'classpath'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dynamic, 'read-only'));
});
