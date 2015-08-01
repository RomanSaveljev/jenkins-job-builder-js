var should = require('should');
var EnvFile = require('../../../../lib/jobs/job/wrappers/env-file.js');
var testlib = require('../../../testlib.js');

describe('EnvFile', function() {
  describe('constructor', testlib.describeProxyConstructor(EnvFile));
  describe('object', testlib.describeProxyUppableAndable(EnvFile));
  describe('properties', testlib.describeProxyPrimitiveProperty(EnvFile, 'properties-file'));
});
