var should = require('should');
var Choice = require('../../../../lib/jobs/job/parameters/choice.js');
var testlib = require('../../../testlib.js');

describe('Choice', function() {
  describe('constructor', testlib.describeProxyConstructor(Choice));
  describe('object', testlib.describeProxyUppableAndable(Choice));
  describe('properties', testlib.describeProxyPrimitiveProperty(Choice, 'name'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Choice, 'choices'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Choice, 'description'));
});
