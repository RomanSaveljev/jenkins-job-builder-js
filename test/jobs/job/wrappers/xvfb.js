var should = require('should');
var Xvfb = require('../../../../lib/jobs/job/wrappers/xvfb.js');
var testlib = require('../../../testlib.js');

describe('Xvfb', function() {
  describe('constructor', testlib.describeProxyConstructor(Xvfb));
  describe('object', testlib.describeProxyUppableAndable(Xvfb));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xvfb, 'installation-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xvfb, 'auto-display-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xvfb, 'display-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xvfb, 'assigned-labels'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xvfb, 'parallel-build'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xvfb, 'timeout'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xvfb, 'screen'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xvfb, 'display-name-offset'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xvfb, 'additional-options'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xvfb, 'debug'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xvfb, 'shutdown-with-build'));
});
