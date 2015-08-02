var should = require('should');
var Series = require('../../../../../lib/jobs/job/publishers/plot/series.js');
var testlib = require('../../../../testlib.js');

describe('Series', function() {
  describe('constructor', testlib.describeProxyConstructor(Series));
  describe('object', testlib.describeProxyUppableAndable(Series));
  describe('properties', testlib.describeProxyPrimitiveProperty(Series, 'file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Series, 'inclusion-flag'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Series, 'exclude'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Series, 'url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Series, 'display-table'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Series, 'label'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Series, 'format'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Series, 'xpath-type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Series, 'xpath'));
});
