var should = require('should');
var CustomTools = require('../lib/wrappers/custom-tools.js');
var testlib = require('./testlib.js');

describe('CustomTools', function() {
  describe('constructor', testlib.describeObjectProxyConstructor(CustomTools));
  describe('object', testlib.describeObjectProxyUppableAndable(CustomTools));
  describe('properties', testlib.describeObjectProxyArrayProperty(CustomTools, 'tools'));
  describe('properties', testlib.describeObjectProxyProperty(CustomTools, 'skipMasterInstall', 'skip-master-install'));
  describe('properties', testlib.describeObjectProxyProperty(CustomTools, 'convertHomesToUpper', 'convert-homes-to-upper'));
});
