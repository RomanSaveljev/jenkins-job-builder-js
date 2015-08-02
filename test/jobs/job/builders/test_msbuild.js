var should = require('should');
var MsBuild = require('../../../../lib/jobs/job/builders/msbuild.js');
var testlib = require('../../../testlib.js');

describe('MsBuild', function() {
  describe('constructor', testlib.describeProxyConstructor(MsBuild));
  describe('object', testlib.describeProxyUppableAndable(MsBuild));
  describe('properties', testlib.describeProxyPrimitiveProperty(MsBuild, 'msbuild-version'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MsBuild, 'solution-file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MsBuild, 'extra-parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MsBuild, 'pass-build-variables'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MsBuild, 'continue-on-build-failure'));
});
