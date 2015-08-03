var should = require('should');
var Ssh = require('../../../../lib/jobs/job/publishers/ssh.js');
var testlib = require('../../../testlib.js');

describe('Ssh', function() {
  describe('constructor', testlib.describeProxyConstructor(Ssh));
  describe('object', testlib.describeProxyUppableAndable(Ssh));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ssh, 'site'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ssh, 'target'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ssh, 'target-is-date-format'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ssh, 'clean-remote'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ssh, 'source'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ssh, 'command'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ssh, 'timeout'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ssh, 'use-pty'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ssh, 'excludes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ssh, 'remove-prefix'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ssh, 'fail-on-error'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ssh, 'always-publish-from-master'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ssh, 'flatten'));
});
