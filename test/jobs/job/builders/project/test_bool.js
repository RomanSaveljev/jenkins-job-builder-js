var should = require('should');
var Bool = require('../../../../../lib/jobs/job/builders/project/bool.js');
var testlib = require('../../../../testlib.js');

describe('Bool', function() {
  describe('constructor', testlib.describeProxyConstructor(Bool));
  describe('object', testlib.describeProxyUppableAndable(Bool));
  describe('properties', testlib.describeProxyPrimitiveProperty(Bool, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Bool, 'value'));
});
