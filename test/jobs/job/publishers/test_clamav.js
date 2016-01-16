var should = require('should');
var Clamav = require('../../../../lib/jobs/job/publishers/clamav.js');
var testlib = require('../../../testlib.js');

describe('Clamav', function() {
  describe('constructor', testlib.describeProxyConstructor(Clamav));
  describe('object', testlib.describeProxyUppableAndable(Clamav));
  describe('properties', testlib.describeProxyPrimitiveProperty(Clamav, 'includes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Clamav, 'excludes'));
});
