var should = require('should');
var CustomTools = require('../../../../lib/jobs/job/wrappers/custom-tools.js');
var testlib = require('../../../testlib.js');

describe('CustomTools', function() {
  describe('constructor', testlib.describeProxyConstructor(CustomTools));
  describe('object', testlib.describeProxyUppableAndable(CustomTools));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(CustomTools, 'tools'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CustomTools, 'skip-master-install'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CustomTools, 'convert-homes-to-upper'));
});
