var should = require('should');
var EnvScript = require('../../../../lib/jobs/job/wrappers/env-script.js');
var testlib = require('../../../testlib.js');

describe('EnvScript', function() {
  describe('constructor', testlib.describeProxyConstructor(EnvScript));
  describe('object', testlib.describeProxyUppableAndable(EnvScript));
  describe('properties', testlib.describeProxyPrimitiveProperty(EnvScript, 'script-content'));
  describe('properties', testlib.describeProxyPrimitiveProperty(EnvScript, 'only-run-on-parent'));
});
