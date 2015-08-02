var should = require('should');
var ChangeAssemblyVersion = require('../../../../lib/jobs/job/builders/change-assembly-version.js');
var testlib = require('../../../testlib.js');

describe('ChangeAssemblyVersion', function() {
  describe('constructor', testlib.describeProxyConstructor(ChangeAssemblyVersion));
  describe('object', testlib.describeProxyUppableAndable(ChangeAssemblyVersion));
  describe('properties', testlib.describeProxyPrimitiveProperty(ChangeAssemblyVersion, 'version'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ChangeAssemblyVersion, 'assembly-file'));
});
