var should = require('should');
var CucumberTestResult = require('../../../../lib/jobs/job/publishers/cucumber-testresult.js');
var testlib = require('../../../testlib.js');

describe('CucumberTestResult', function() {
  describe('constructor', testlib.describeProxyConstructor(CucumberTestResult));
  describe('object', testlib.describeProxyUppableAndable(CucumberTestResult));
  describe('properties', testlib.describeProxyPrimitiveProperty(CucumberTestResult, 'results'));
});
