var should = require('should');
var Entry = require('../../../../../lib/jobs/job/publishers/artifact-deployer/entry.js');
var testlib = require('../../../../testlib.js');

describe('Entry', function() {
  describe('constructor', testlib.describeProxyConstructor(Entry));
  describe('object', testlib.describeProxyUppableAndable(Entry));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'files'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'basedir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'excludes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'remote'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'flatten'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'delete-remote'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'delete-remote-artifacts'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'fail-no-files'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Entry, 'groovy-script'));
});
