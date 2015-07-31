var should = require('should');
var Axis = require('../../../../lib/jobs/job/axes/axis.js');
var testlib = require('../../../testlib.js');

describe('Axis', function() {
  describe('constructor', testlib.describeProxyConstructor(Axis));
  describe('object', testlib.describeProxyUppableAndable(Axis));
  describe('properties', testlib.describeProxyPrimitiveProperty(Axis, 'type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Axis, 'name'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Axis, 'values'));
});
