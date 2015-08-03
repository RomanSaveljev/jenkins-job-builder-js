var should = require('should');
var Scoverage = require('../../../../lib/jobs/job/publishers/scoverage.js');
var testlib = require('../../../testlib.js');

describe('Scoverage', function() {
  describe('constructor', testlib.describeProxyConstructor(Scoverage));
  describe('object', testlib.describeProxyUppableAndable(Scoverage));
  describe('properties', testlib.describeProxyPrimitiveProperty(Scoverage, 'report-directory'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Scoverage, 'report-file'));
});
