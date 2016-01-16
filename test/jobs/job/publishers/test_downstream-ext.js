var should = require('should');
var DownstreamExt = require('../../../../lib/jobs/job/publishers/downstream-ext.js');
var testlib = require('../../../testlib.js');

describe('DownstreamExt', function() {
  describe('constructor', testlib.describeProxyConstructor(DownstreamExt));
  describe('object', testlib.describeProxyUppableAndable(DownstreamExt));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(DownstreamExt, 'projects'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DownstreamExt, 'condition'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DownstreamExt, 'criteria'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DownstreamExt, 'only-on-scm-change'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DownstreamExt, 'only-on-local-scm-change'));
});
