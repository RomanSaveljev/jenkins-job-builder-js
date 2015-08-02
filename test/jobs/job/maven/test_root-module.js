var should = require('should');
var RootModule = require('../../../../lib/jobs/job/maven/root-module.js');
var testlib = require('../../../testlib.js');

describe('RootModule', function() {
  describe('constructor', testlib.describeProxyConstructor(RootModule));
  describe('object', testlib.describeProxyUppableAndable(RootModule));
  describe('properties', testlib.describeProxyPrimitiveProperty(RootModule, 'group-id'));
  describe('properties', testlib.describeProxyPrimitiveProperty(RootModule, 'artifact-id'));
});
