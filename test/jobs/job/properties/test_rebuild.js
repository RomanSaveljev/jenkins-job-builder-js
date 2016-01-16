var should = require('should');
var Rebuild = require('../../../../lib/jobs/job/properties/rebuild.js');
var testlib = require('../../../testlib.js');

describe('Rebuild', function() {
  describe('constructor', testlib.describeProxyConstructor(Rebuild));
  describe('object', testlib.describeProxyUppableAndable(Rebuild));
  describe('properties', testlib.describeProxyPrimitiveProperty(Rebuild, 'auto-rebuild'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Rebuild, 'rebuild-disabled'));
});
