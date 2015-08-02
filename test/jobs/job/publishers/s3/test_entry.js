var should = require('should');
var Entry = require('../../../../../lib/jobs/job/publishers/s3/entry.js');
var testlib = require('../../../../testlib.js');

describe('Entry', function() {
  describe('constructor', testlib.describeProxyConstructor(Entry));
  describe('object', testlib.describeProxyUppableAndable(Entry));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'destination-bucket'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'source-files'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'storage-class'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'bucket-region'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'upload-on-failure'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'upload-from-slave'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'managed-artifacts'));
});
