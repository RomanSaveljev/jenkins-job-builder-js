var should = require('should');
var ConfigFile = require('../../../../../lib/jobs/job/wrappers/config-file-provider/config-file.js');
var testlib = require('../../../../testlib.js');

describe('ConfigFile', function() {
  describe('constructor', testlib.describeProxyConstructor(ConfigFile));
  describe('object', testlib.describeProxyUppableAndable(ConfigFile));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConfigFile, 'file-id'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConfigFile, 'target'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConfigFile, 'variable'));
});
