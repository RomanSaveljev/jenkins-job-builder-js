var should = require('should');
var Tag = require('../../../../../lib/jobs/job/publishers/git/tag.js');
var testlib = require('../../../../testlib.js');

describe('Tag', function() {
  describe('constructor', testlib.describeProxyConstructor(Tag));
  describe('object', testlib.describeProxyUppableAndable(Tag));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tag, 'remote'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tag, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tag, 'message'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tag, 'create-tag'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tag, 'update-tag'));  
});
