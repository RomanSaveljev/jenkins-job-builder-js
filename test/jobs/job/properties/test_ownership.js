var should = require('should');
var Ownership = require('../../../../lib/jobs/job/properties/ownership.js');
var testlib = require('../../../testlib.js');

describe('Ownership', function() {
  describe('constructor', testlib.describeProxyConstructor(Ownership));
  describe('object', testlib.describeProxyUppableAndable(Ownership));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ownership, 'enabled'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ownership, 'owner'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Ownership, 'co-owners'));
});
