var should = require('should');
var SlocCount = require('../../../../lib/jobs/job/publishers/sloccount.js');
var testlib = require('../../../testlib.js');

describe('SlocCount', function() {
  describe('constructor', testlib.describeProxyConstructor(SlocCount));
  describe('object', testlib.describeProxyUppableAndable(SlocCount));
  describe('properties', testlib.describeProxyPrimitiveProperty(SlocCount, 'report-files'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SlocCount, 'charset'));
});
