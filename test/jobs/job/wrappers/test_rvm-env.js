var should = require('should');
var RvmEnv = require('../../../../lib/jobs/job/wrappers/rvm-env.js');
var testlib = require('../../../testlib.js');

describe('RvmEnv', function() {
  describe('constructor', testlib.describeProxyConstructor(RvmEnv));
  describe('object', testlib.describeProxyUppableAndable(RvmEnv));
  describe('properties', testlib.describeProxyPrimitiveProperty(RvmEnv, 'implementation'));
});
