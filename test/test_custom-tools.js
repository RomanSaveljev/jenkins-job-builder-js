var should = require('should');
var CustomTools = require('../lib/wrappers/custom-tools.js');
var testlib = require('./testlib.js');

describe('CustomTools', function() {
  describe('constructor', testlib.describeProxyConstructor(CustomTools));
  describe('object', testlib.describeProxyUppableAndable(CustomTools));
  describe('properties', testlib.describePrimitiveArrayProxyProperty(CustomTools, 'tools'));
  describe('properties', testlib.describeObjectProxyProperty(CustomTools, 'skipMasterInstall', 'skip-master-install'));
  describe('properties', testlib.describeObjectProxyProperty(CustomTools, 'convertHomesToUpper', 'convert-homes-to-upper'));
});
