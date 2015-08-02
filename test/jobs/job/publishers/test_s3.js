var should = require('should');
var S3 = require('../../../../lib/jobs/job/publishers/s3.js');
var testlib = require('../../../testlib.js');
var Entry = require('../../../../lib/jobs/job/publishers/s3/entry.js');
var MetadataTag = require('../../../../lib/jobs/job/publishers/s3/metadata-tag.js');

describe('S3', function() {
  describe('constructor', testlib.describeProxyConstructor(S3));
  describe('object', testlib.describeProxyUppableAndable(S3));
  describe('properties', testlib.describeProxyPrimitiveProperty(S3, 's3-profile'));
  describe('properties', testlib.describeProxyObjectArrayProperty(S3, 'entries', Entry));
  describe('properties', testlib.describeProxyObjectArrayProperty(S3, 'metadata-tags', MetadataTag));
});
