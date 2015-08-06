var should = require('should');
var Release = require('../../../../lib/jobs/job/wrappers/release.js');
var testlib = require('../../../testlib.js');
var Parameters = require('../../../../lib/jobs/job/parameters.js');
var Builders = require('../../../../lib/jobs/job/builders.js');

describe('Release', function() {
  describe('constructor', testlib.describeProxyConstructor(Release));
  describe('object', testlib.describeProxyUppableAndable(Release));
  describe('properties', testlib.describeProxyPrimitiveProperty(Release, 'keep-forever'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Release, 'override-build-parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Release, 'version-template'));
  describe('properties', testlib.describeProxyCustomArrayProperty(Release, 'parameters', Parameters));
  describe('properties', testlib.describeProxyCustomArrayProperty(Release, 'pre-build', Builders));
  describe('properties', testlib.describeProxyCustomArrayProperty(Release, 'post-build', Builders));
  describe('properties', testlib.describeProxyCustomArrayProperty(Release, 'post-success', Builders));
  describe('properties', testlib.describeProxyCustomArrayProperty(Release, 'post-failed', Builders));
});
