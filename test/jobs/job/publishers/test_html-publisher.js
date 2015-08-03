var should = require('should');
var HtmlPublisher = require('../../../../lib/jobs/job/publishers/html-publisher.js');
var testlib = require('../../../testlib.js');

describe('HtmlPublisher', function() {
  describe('constructor', testlib.describeProxyConstructor(HtmlPublisher));
  describe('object', testlib.describeProxyUppableAndable(HtmlPublisher));
  describe('properties', testlib.describeProxyPrimitiveProperty(HtmlPublisher, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(HtmlPublisher, 'dir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(HtmlPublisher, 'files'));
  describe('properties', testlib.describeProxyPrimitiveProperty(HtmlPublisher, 'keep-all'));
  describe('properties', testlib.describeProxyPrimitiveProperty(HtmlPublisher, 'allow-missing'));
});
