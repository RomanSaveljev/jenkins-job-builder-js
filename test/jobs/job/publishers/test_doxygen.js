var should = require('should');
var Doxygen = require('../../../../lib/jobs/job/publishers/doxygen.js');
var testlib = require('../../../testlib.js');

describe('Doxygen', function() {
  describe('constructor', testlib.describeProxyConstructor(Doxygen));
  describe('object', testlib.describeProxyUppableAndable(Doxygen));
  describe('properties', testlib.describeProxyPrimitiveProperty(Doxygen, 'doxyfile'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Doxygen, 'keepall'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Doxygen, 'folder'));
});
