var should = require('should');
var MetadataTag = require('../../../../../lib/jobs/job/publishers/s3/metadata-tag.js');
var testlib = require('../../../../testlib.js');

describe('MetadataTag', function() {
  describe('constructor', testlib.describeProxyConstructor(MetadataTag));
  describe('object', testlib.describeProxyUppableAndable(MetadataTag));
  describe('properties', testlib.describeProxyPrimitiveProperty(MetadataTag, 'key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MetadataTag, 'value'));
});
