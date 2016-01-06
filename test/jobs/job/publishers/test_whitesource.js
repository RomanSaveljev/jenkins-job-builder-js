var should = require('should');
var Whitesource = require('../../../../lib/jobs/job/publishers/whitesource.js');
var testlib = require('../../../testlib.js');

describe('Whitesource', function() {
  describe('constructor', testlib.describeProxyConstructor(Whitesource));
  describe('object', testlib.describeProxyUppableAndable(Whitesource));
  describe('properties', testlib.describeProxyPrimitiveProperty(Whitesource, 'product-token'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Whitesource, 'version'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Whitesource, 'override-token'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Whitesource, 'project-token'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Whitesource, 'policies'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Whitesource, 'includes'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Whitesource, 'excludes'));
});
