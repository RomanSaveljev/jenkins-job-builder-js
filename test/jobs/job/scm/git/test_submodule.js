var should = require('should');
var Submodule = require('../../../../../lib/jobs/job/scm/git/submodule.js');
var testlib = require('../../../../testlib.js');

describe('Submodule', function() {
  describe('constructor', testlib.describeProxyConstructor(Submodule));
  describe('object', testlib.describeProxyUppableAndable(Submodule));
  describe('properties', testlib.describeProxyPrimitiveProperty(Submodule, 'disable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Submodule, 'recursive'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Submodule, 'tracking'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Submodule, 'timeout'));
});
