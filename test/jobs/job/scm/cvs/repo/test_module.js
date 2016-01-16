var should = require('should');
var Module = require('../../../../../../lib/jobs/job/scm/cvs/repo/module.js');
var testlib = require('../../../../../testlib.js');

describe('Module', function() {
  describe('constructor', testlib.describeProxyConstructor(Module));
  describe('object', testlib.describeProxyUppableAndable(Module));
  describe('properties', testlib.describeProxyPrimitiveProperty(Module, 'remote'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Module, 'local-name'));
});
