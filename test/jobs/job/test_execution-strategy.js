var should = require('should');
var ExecutionStrategy = require('../../../lib/jobs/job/execution-strategy.js');
var testlib = require('../../testlib.js');
var TouchStone = require('../../../lib/jobs/job/execution-strategy/touchstone.js');

describe('ExecutionStrategy', function() {
  describe('constructor', testlib.describeProxyConstructor(ExecutionStrategy));
  describe('object', testlib.describeProxyUppableAndable(ExecutionStrategy));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExecutionStrategy, 'combination-filter'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExecutionStrategy, 'sequential'));
  describe('properties', testlib.describeProxyObjectProperty(ExecutionStrategy, 'touchstone', TouchStone));
});
