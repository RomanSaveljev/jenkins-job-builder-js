var should = require('should');
var Throttle = require('../../../../lib/jobs/job/properties/throttle.js');
var testlib = require('../../../testlib.js');

describe('Throttle', function() {
  describe('constructor', testlib.describeProxyConstructor(Throttle));
  describe('object', testlib.describeProxyUppableAndable(Throttle));
  describe('properties', testlib.describeProxyPrimitiveProperty(Throttle, 'max-per-node'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Throttle, 'max-total'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Throttle, 'enabled'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Throttle, 'option'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Throttle, 'categories'));
});
