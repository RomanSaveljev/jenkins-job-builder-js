var should = require('should');
var RichTextPublisher = require('../../../../lib/jobs/job/publishers/rich-text-publisher.js');
var testlib = require('../../../testlib.js');

describe('RichTextPublisher', function() {
  describe('constructor', testlib.describeProxyConstructor(RichTextPublisher));
  describe('object', testlib.describeProxyUppableAndable(RichTextPublisher));
  describe('properties', testlib.describeProxyPrimitiveProperty(RichTextPublisher, 'stable-text'));
  describe('properties', testlib.describeProxyPrimitiveProperty(RichTextPublisher, 'unstable-text'));
  describe('properties', testlib.describeProxyPrimitiveProperty(RichTextPublisher, 'failed-text'));
  describe('properties', testlib.describeProxyPrimitiveProperty(RichTextPublisher, 'parser-name'));

});
