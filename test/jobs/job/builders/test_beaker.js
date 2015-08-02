var should = require('should');
var Beaker = require('../../../../lib/jobs/job/builders/beaker.js');
var testlib = require('../../../testlib.js');

describe('Beaker', function() {
  describe('constructor', testlib.describeProxyConstructor(Beaker));
  describe('object', testlib.describeProxyUppableAndable(Beaker));
  describe('properties', testlib.describeProxyPrimitiveProperty(Beaker, 'content'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Beaker, 'path'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Beaker, 'download-logs'));
});
