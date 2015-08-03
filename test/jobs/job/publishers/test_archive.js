var should = require('should');
var Archive = require('../../../../lib/jobs/job/publishers/archive.js');
var testlib = require('../../../testlib.js');

describe('Archive', function() {
  describe('constructor', testlib.describeProxyConstructor(Archive));
  describe('object', testlib.describeProxyUppableAndable(Archive));
  describe('properties', testlib.describeProxyPrimitiveProperty(Archive, 'artifacts'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Archive, 'excludes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Archive, 'latest-only'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Archive, 'allow-empty'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Archive, 'fingerprint'));
});
