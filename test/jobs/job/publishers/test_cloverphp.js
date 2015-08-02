var should = require('should');
var CloverPhp = require('../../../../lib/jobs/job/publishers/cloverphp.js');
var testlib = require('../../../testlib.js');
var Html = require('../../../../lib/jobs/job/publishers/cloverphp/html.js');
var MetricTargets = require('../../../../lib/jobs/job/publishers/cloverphp/metric-targets.js');

describe('CloverPhp', function() {
  describe('constructor', testlib.describeProxyConstructor(CloverPhp));
  describe('object', testlib.describeProxyUppableAndable(CloverPhp));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloverPhp, 'xml-location'));
  describe('properties', testlib.describeProxyObjectProperty(CloverPhp, 'html', Html));
  describe('properties', testlib.describeProxyCustomArrayProperty(CloverPhp, 'metric-targets', MetricTargets));
});
