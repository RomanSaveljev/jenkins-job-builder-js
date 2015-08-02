var should = require('should');
var LeastLoad = require('../../../../lib/jobs/job/properties/least-load.js');
var testlib = require('../../../testlib.js');

describe('LeastLoad', function() {
  describe('constructor', testlib.describeProxyConstructor(LeastLoad));
  describe('object', testlib.describeProxyUppableAndable(LeastLoad));
  describe('properties', testlib.describeProxyPrimitiveProperty(LeastLoad, 'disabled'));
});
