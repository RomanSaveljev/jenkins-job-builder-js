var should = require('should');
var File = require('../../../../lib/jobs/job/parameters/file.js');
var testlib = require('../../../testlib.js');

describe('File', function() {
  describe('constructor', testlib.describeProxyConstructor(File));
  describe('object', testlib.describeProxyUppableAndable(File));
  describe('properties', testlib.describeProxyPrimitiveProperty(File, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(File, 'description'));
});
