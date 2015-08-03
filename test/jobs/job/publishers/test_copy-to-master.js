var should = require('should');
var CopyToMaster = require('../../../../lib/jobs/job/publishers/copy-to-master.js');
var testlib = require('../../../testlib.js');

describe('CopyToMaster', function() {
  describe('constructor', testlib.describeProxyConstructor(CopyToMaster));
  describe('object', testlib.describeProxyUppableAndable(CopyToMaster));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(CopyToMaster, 'includes'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(CopyToMaster, 'excludes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyToMaster, 'destination'));
});
