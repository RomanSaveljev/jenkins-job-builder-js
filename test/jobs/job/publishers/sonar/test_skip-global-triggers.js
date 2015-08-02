var should = require('should');
var SkipGlobalTriggers = require('../../../../../lib/jobs/job/publishers/sonar/skip-global-triggers.js');
var testlib = require('../../../../testlib.js');

describe('SkipGlobalTriggers', function() {
  describe('constructor', testlib.describeProxyConstructor(SkipGlobalTriggers));
  describe('object', testlib.describeProxyUppableAndable(SkipGlobalTriggers));
  describe('properties', testlib.describeProxyPrimitiveProperty(SkipGlobalTriggers, 'skip-when-scm-change'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SkipGlobalTriggers, 'skip-when-upstream-build'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SkipGlobalTriggers, 'skip-when-envvar-defined'));
});
