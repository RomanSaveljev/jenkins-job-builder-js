var should = require('should');
var Plot = require('../../../../lib/jobs/job/publishers/plot.js');
var testlib = require('../../../testlib.js');
var Series = require('../../../../lib/jobs/job/publishers/plot/series.js');

describe('Plot', function() {
  describe('constructor', testlib.describeProxyConstructor(Plot));
  describe('object', testlib.describeProxyUppableAndable(Plot));
  describe('properties', testlib.describeProxyPrimitiveProperty(Plot, 'title'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Plot, 'yaxis'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Plot, 'group'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Plot, 'num-builds'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Plot, 'style'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Plot, 'use-description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Plot, 'exclude-zero-yaxis'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Plot, 'logarithmic-yaxis'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Plot, 'keep-records'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Plot, 'csv-file-name'));
  describe('properties', testlib.describeProxyObjectArrayProperty(Plot, 'series', Series));
});
