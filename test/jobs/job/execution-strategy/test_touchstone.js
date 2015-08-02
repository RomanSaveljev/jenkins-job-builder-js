var should = require('should');
var Touchstone = require('../../../../lib/jobs/job/execution-strategy/touchstone.js');
var testlib = require('../../../testlib.js');

describe('Touchstone', function() {
  describe('constructor', testlib.describeProxyConstructor(Touchstone));
  describe('object', testlib.describeProxyUppableAndable(Touchstone));
  describe('properties', testlib.describeProxyPrimitiveProperty(Touchstone, 'expr'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Touchstone, 'result'));
});
