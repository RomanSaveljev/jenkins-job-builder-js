var should = require('should');
var ScanBuild = require('../../../../lib/jobs/job/publishers/scan-build.js');
var testlib = require('../../../testlib.js');

describe('ScanBuild', function() {
  describe('constructor', testlib.describeProxyConstructor(ScanBuild));
  describe('object', testlib.describeProxyUppableAndable(ScanBuild));
  describe('properties', testlib.describeProxyPrimitiveProperty(ScanBuild, 'mark-unstable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ScanBuild, 'threshold'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ScanBuild, 'exclude-paths'));
});
