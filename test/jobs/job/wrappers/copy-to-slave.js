var should = require('should');
var CopyToSlave = require('../../../../lib/jobs/job/wrappers/copy-to-slave.js');
var testlib = require('../../../testlib.js');

describe('CopyToSlave', function() {
  describe('constructor', testlib.describeProxyConstructor(CopyToSlave));
  describe('object', testlib.describeProxyUppableAndable(CopyToSlave));
  describe('properties', testlib.describePrimitiveArrayProxyProperty(CopyToSlave, 'includes'));
  describe('properties', testlib.describePrimitiveArrayProxyProperty(CopyToSlave, 'excludes'));
  describe('properties', testlib.describeObjectProxyProperty(CopyToSlave, 'flatten'));
  describe('properties', testlib.describeObjectProxyProperty(CopyToSlave, 'relativeTo', 'relative-to'));
  describe('properties', testlib.describeObjectProxyProperty(CopyToSlave, 'includeAntExcludes', 'include-ant-excludes'));
});
