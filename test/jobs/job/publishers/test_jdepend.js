var should = require('should');
var Jdepend = require('../../../../lib/jobs/job/publishers/jdepend.js');
var testlib = require('../../../testlib.js');

describe('Jdepend', function() {
  describe('constructor', testlib.describeProxyConstructor(Jdepend));
  describe('object', testlib.describeProxyUppableAndable(Jdepend));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jdepend, 'file'));
});
