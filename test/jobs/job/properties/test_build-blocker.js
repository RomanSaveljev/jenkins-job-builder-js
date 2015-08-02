var should = require('should');
var BuildBlocker = require('../../../../lib/jobs/job/properties/build-blocker.js');
var testlib = require('../../../testlib.js');

describe('BuildBlocker', function() {
  describe('constructor', testlib.describeProxyConstructor(BuildBlocker));
  describe('object', testlib.describeProxyUppableAndable(BuildBlocker));
  describe('properties', testlib.describeProxyPrimitiveProperty(BuildBlocker, 'use-build-blocker'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(BuildBlocker, 'blocking-jobs'));
});
