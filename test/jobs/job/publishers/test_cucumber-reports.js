var should = require('should');
var CucumberReports = require('../../../../lib/jobs/job/publishers/cucumber-reports.js');
var testlib = require('../../../testlib.js');

describe('CucumberReports', function() {
  describe('constructor', testlib.describeProxyConstructor(CucumberReports));
  describe('object', testlib.describeProxyUppableAndable(CucumberReports));
  describe('properties', testlib.describeProxyPrimitiveProperty(CucumberReports, 'json-reports-path'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CucumberReports, 'file-include-pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CucumberReports, 'file-exclude-pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CucumberReports, 'plugin-url-path'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CucumberReports, 'skipped-fails'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CucumberReports, 'pending-fails'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CucumberReports, 'undefined-fails'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CucumberReports, 'missing-fails'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CucumberReports, 'no-flash-charts'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CucumberReports, 'ignore-failed-tests'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CucumberReports, 'parallel-testing'));
});
