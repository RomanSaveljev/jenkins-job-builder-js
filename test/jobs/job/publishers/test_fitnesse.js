var should = require('should');
var Fitnesse = require('../../../../lib/jobs/job/publishers/fitnesse.js');
var testlib = require('../../../testlib.js');

describe('Fitnesse', function() {
  describe('constructor', testlib.describeProxyConstructor(Fitnesse));
  describe('object', testlib.describeProxyUppableAndable(Fitnesse));
  describe('properties', testlib.describeProxyPrimitiveProperty(Fitnesse, 'results'));
});
