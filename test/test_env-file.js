var should = require('should');
var EnvFile = require('../lib/wrappers/env-file.js');
var testlib = require('./testlib.js');

describe('EnvFile', function() {
  describe('constructor', testlib.describeProxyConstructor(EnvFile));
  describe('object', testlib.describeProxyUppableAndable(EnvFile));
  describe('properties', testlib.describeObjectProxyProperty(EnvFile, 'propertiesFile', 'properties-file'));
});
