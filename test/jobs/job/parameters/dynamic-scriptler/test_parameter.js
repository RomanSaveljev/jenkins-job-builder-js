var should = require('should');
var Parameter = require('../../../../../lib/jobs/job/parameters/dynamic-scriptler/parameter.js');
var testlib = require('../../../../testlib.js');

describe('Parameter', function() {
  describe('constructor', testlib.describeProxyConstructor(Parameter));
  describe('object', testlib.describeProxyUppableAndable(Parameter));
  describe('properties', testlib.describeProxyPrimitiveProperty(Parameter, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Parameter, 'value'));
});
