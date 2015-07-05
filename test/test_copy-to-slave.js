var should = require('should');
var CopyToSlave = require('../lib/wrappers/copy-to-slave.js');
var testlib = require('./testlib.js');

describe('CopyToSlave', function() {
  describe('constructor', testlib.describeObjectProxyConstructor(CopyToSlave));
  describe('object', testlib.describeObjectProxyUppableAndable(CopyToSlave));
  describe('properties', testlib.describeObjectProxyArrayProperty(CopyToSlave, 'includes'));
  describe('properties', testlib.describeObjectProxyArrayProperty(CopyToSlave, 'excludes'));
  describe('properties', testlib.describeObjectProxyProperty(CopyToSlave, 'flatten'));
  describe('properties', testlib.describeObjectProxyProperty(CopyToSlave, 'relativeTo', 'relative-to'));
  describe('properties', testlib.describeObjectProxyProperty(CopyToSlave, 'includeAntExcludes', 'include-ant-excludes'));
});
