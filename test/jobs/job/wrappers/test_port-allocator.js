var should = require('should');
var PortAllocator = require('../../../../lib/jobs/job/wrappers/port-allocator.js');
var testlib = require('../../../testlib.js');

describe('PortAllocator', function() {
  describe('constructor', testlib.describeProxyConstructor(PortAllocator));
  describe('object', testlib.describeProxyUppableAndable(PortAllocator));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(PortAllocator, 'names'));
});
