var should = require('should');
var Primitive = require('../../../../lib/jobs/job/metadata/primitive.js');
var testlib = require('../../../testlib.js');

describe('Primitive', function() {
  describe('constructor', testlib.describeProxyConstructor(Primitive));
  describe('object', testlib.describeProxyUppableAndable(Primitive));
  describe('properties', testlib.describeProxyPrimitiveProperty(Primitive, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Primitive, 'value'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Primitive, 'expose-to-env'));
});
