var should = require('should');
var Robot = require('../../../../lib/jobs/job/publishers/robot.js');
var testlib = require('../../../testlib.js');

describe('Robot', function() {
  describe('constructor', testlib.describeProxyConstructor(Robot));
  describe('object', testlib.describeProxyUppableAndable(Robot));
  describe('properties', testlib.describeProxyPrimitiveProperty(Robot, 'output-path'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Robot, 'log-file-link'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Robot, 'report-html'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Robot, 'log-html'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Robot, 'output-xml'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Robot, 'pass-threshold'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Robot, 'unstable-threshold'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Robot, 'only-critical'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Robot, 'other-files'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Robot, 'archive-output-xml'));
});
