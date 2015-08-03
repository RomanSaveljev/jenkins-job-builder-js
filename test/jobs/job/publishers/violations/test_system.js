var should = require('should');
var System = require('../../../../../lib/jobs/job/publishers/violations/system.js');
var testlib = require('../../../../testlib.js');

describe('System', function() {
  describe('constructor', testlib.describeProxyConstructor(System));
  describe('object', testlib.describeProxyUppableAndable(System));
  describe('properties', testlib.describeProxyPrimitiveProperty(System, 'min'));
  describe('properties', testlib.describeProxyPrimitiveProperty(System, 'max'));
  describe('properties', testlib.describeProxyPrimitiveProperty(System, 'unstable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(System, 'pattern'));
});
