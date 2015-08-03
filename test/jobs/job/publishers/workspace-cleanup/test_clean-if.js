var should = require('should');
var CleanIf = require('../../../../../lib/jobs/job/publishers/workspace-cleanup/clean-if.js');
var testlib = require('../../../../testlib.js');

describe('CleanIf', function() {
  describe('constructor', testlib.describeProxyConstructor(CleanIf));
  describe('object', testlib.describeProxyUppableAndable(CleanIf));
  describe('properties', testlib.describeProxyPrimitiveProperty(CleanIf, 'success'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CleanIf, 'unstable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CleanIf, 'failure'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CleanIf, 'aborted'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CleanIf, 'not-built'));
});
