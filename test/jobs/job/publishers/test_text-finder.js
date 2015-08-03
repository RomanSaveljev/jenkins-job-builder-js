var should = require('should');
var TextFinder = require('../../../../lib/jobs/job/publishers/text-finder.js');
var testlib = require('../../../testlib.js');

describe('TextFinder', function() {
  describe('constructor', testlib.describeProxyConstructor(TextFinder));
  describe('object', testlib.describeProxyUppableAndable(TextFinder));
  describe('properties', testlib.describeProxyPrimitiveProperty(TextFinder, 'regexp'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TextFinder, 'fileset'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TextFinder, 'also-check-console-output'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TextFinder, 'succeed-if-found'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TextFinder, 'unstable-if-found'));
});
