var should = require('should');
var XmlSummary = require('../../../../lib/jobs/job/publishers/xml-summary.js');
var testlib = require('../../../testlib.js');

describe('XmlSummary', function() {
  describe('constructor', testlib.describeProxyConstructor(XmlSummary));
  describe('object', testlib.describeProxyUppableAndable(XmlSummary));
  describe('properties', testlib.describeProxyPrimitiveProperty(XmlSummary, 'files'));
  describe('properties', testlib.describeProxyPrimitiveProperty(XmlSummary, 'shown-on-project-page'));
});
