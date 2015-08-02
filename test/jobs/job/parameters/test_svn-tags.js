var should = require('should');
var SvnTags = require('../../../../lib/jobs/job/parameters/svn-tags.js');
var testlib = require('../../../testlib.js');

describe('SvnTags', function() {
  describe('constructor', testlib.describeProxyConstructor(SvnTags));
  describe('object', testlib.describeProxyUppableAndable(SvnTags));
  describe('properties', testlib.describeProxyPrimitiveProperty(SvnTags, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SvnTags, 'description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SvnTags, 'default'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SvnTags, 'url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SvnTags, 'filter'));
});
