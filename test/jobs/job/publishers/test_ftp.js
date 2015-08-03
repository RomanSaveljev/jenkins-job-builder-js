var should = require('should');
var Ftp = require('../../../../lib/jobs/job/publishers/ftp.js');
var testlib = require('../../../testlib.js');

describe('Ftp', function() {
  describe('constructor', testlib.describeProxyConstructor(Ftp));
  describe('object', testlib.describeProxyUppableAndable(Ftp));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ftp, 'site'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ftp, 'target'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ftp, 'target-is-date-format'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ftp, 'clean-remote'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ftp, 'source'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ftp, 'excludes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ftp, 'remove-prefix'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ftp, 'fail-on-error'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Ftp, 'flatten'));
});
