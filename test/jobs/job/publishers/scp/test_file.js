var should = require('should');
var File = require('../../../../../lib/jobs/job/publishers/scp/file.js');
var testlib = require('../../../../testlib.js');

describe('File', function() {
  describe('constructor', testlib.describeProxyConstructor(File));
  describe('object', testlib.describeProxyUppableAndable(File));
  describe('properties', testlib.describeProxyPrimitiveProperty(File, 'target'));
  describe('properties', testlib.describeProxyPrimitiveProperty(File, 'source'));
  describe('properties', testlib.describeProxyPrimitiveProperty(File, 'keep-hierarchy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(File, 'copy-after-failure'));
  describe('properties', testlib.describeProxyPrimitiveProperty(File, 'copy-console'));
});
