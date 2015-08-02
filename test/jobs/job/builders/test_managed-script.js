var should = require('should');
var ManagedScript = require('../../../../lib/jobs/job/builders/managed-script.js');
var testlib = require('../../../testlib.js');

describe('ManagedScript', function() {
  describe('constructor', testlib.describeProxyConstructor(ManagedScript));
  describe('object', testlib.describeProxyUppableAndable(ManagedScript));
  describe('properties', testlib.describeProxyPrimitiveProperty(ManagedScript, 'script-id'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ManagedScript, 'type'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ManagedScript, 'args'));
});
