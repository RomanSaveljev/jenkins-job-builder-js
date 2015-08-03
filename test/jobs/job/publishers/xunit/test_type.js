var should = require('should');
var Type = require('../../../../../lib/jobs/job/publishers/xunit/type.js');
var testlib = require('../../../../testlib.js');

describe('Type', function() {
  describe('constructor', testlib.describeProxyConstructor(Type));
  describe('object', testlib.describeProxyUppableAndable(Type));
  describe('properties', testlib.describeProxyPrimitiveProperty(Type, 'pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Type, 'requireupdate'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Type, 'deleteoutput'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Type, 'skip-if-no-test-files'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Type, 'stoponerror'));
});
