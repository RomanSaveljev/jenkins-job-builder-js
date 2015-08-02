var should = require('should');
var Scp = require('../../../../lib/jobs/job/publishers/scp.js');
var testlib = require('../../../testlib.js');
var File = require('../../../../lib/jobs/job/publishers/scp/file.js');

describe('Scp', function() {
  describe('constructor', testlib.describeProxyConstructor(Scp));
  describe('object', testlib.describeProxyUppableAndable(Scp));
  describe('properties', testlib.describeProxyPrimitiveProperty(Scp, 'site'));
  describe('properties', testlib.describeProxyObjectArrayProperty(Scp, 'files', File));
});
