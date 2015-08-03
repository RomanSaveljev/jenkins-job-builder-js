var should = require('should');
var Cifs = require('../../../../lib/jobs/job/publishers/cifs.js');
var testlib = require('../../../testlib.js');

describe('Cifs', function() {
  describe('constructor', testlib.describeProxyConstructor(Cifs));
  describe('object', testlib.describeProxyUppableAndable(Cifs));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cifs, 'site'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cifs, 'target'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cifs, 'target-is-date-format'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cifs, 'clean-remote'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cifs, 'source'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cifs, 'excludes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cifs, 'remove-prefix'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cifs, 'fail-on-error'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cifs, 'flatten'));
});
