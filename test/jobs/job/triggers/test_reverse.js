var should = require('should');
var Reverse = require('../../../../lib/jobs/job/triggers/reverse.js');
var testlib = require('../../../testlib.js');

describe('Reverse', function() {
  describe('constructor', testlib.describeProxyConstructor(Reverse));
  describe('object', testlib.describeProxyUppableAndable(Reverse));
  describe('properties', testlib.describeProxyPrimitiveProperty(Reverse, 'jobs'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Reverse, 'result'));
});
