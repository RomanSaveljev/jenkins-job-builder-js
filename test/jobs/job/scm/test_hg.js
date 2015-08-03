var should = require('should');
var Hg = require('../../../../lib/jobs/job/scm/hg.js');
var testlib = require('../../../testlib.js');

describe('Hg', function() {
  describe('constructor', testlib.describeProxyConstructor(Hg));
  describe('object', testlib.describeProxyUppableAndable(Hg));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hg, 'url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hg, 'credentials-id'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hg, 'revision-type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hg, 'revision'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Hg, 'modules'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hg, 'clean'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hg, 'subdir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hg, 'disable-changelog'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hg, 'browser'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hg, 'browser-url'));
});
