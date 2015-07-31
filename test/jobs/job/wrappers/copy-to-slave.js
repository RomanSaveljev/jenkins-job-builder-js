var should = require('should');
var CopyToSlave = require('../../../../lib/jobs/job/wrappers/copy-to-slave.js');
var testlib = require('../../../testlib.js');

describe('CopyToSlave', function() {
  describe('constructor', testlib.describeProxyConstructor(CopyToSlave));
  describe('object', testlib.describeProxyUppableAndable(CopyToSlave));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(CopyToSlave, 'includes'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(CopyToSlave, 'excludes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyToSlave, 'flatten'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyToSlave, 'relative-to'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyToSlave, 'include-ant-excludes'));
});
