var should = require('should');
var ConfigFileProvider = require('../../../../lib/jobs/job/wrappers/config-file-provider.js');
var testlib = require('../../../testlib.js');
var ConfigFile = require('../../../../lib/jobs/job/wrappers/config-file-provider/config-file.js');

describe('ConfigFileProvider', function() {
  describe('constructor', testlib.describeProxyConstructor(ConfigFileProvider));
  describe('object', testlib.describeProxyUppableAndable(ConfigFileProvider));
  describe('properties', testlib.describeProxyObjectArrayProperty(ConfigFileProvider, 'files', ConfigFile));
});
