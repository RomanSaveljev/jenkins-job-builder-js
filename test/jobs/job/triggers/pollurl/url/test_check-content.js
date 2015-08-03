var should = require('should');
var CheckContent = require('../../../../../../lib/jobs/job/triggers/pollurl/url/check-content.js');
var testlib = require('../../../../../testlib.js');

describe('CheckContent', function() {
  describe('constructor', testlib.describeProxyConstructor(CheckContent));
  describe('object', testlib.describeProxyUppableAndable(CheckContent));
  describe('properties', testlib.describeProxyPrimitiveProperty(CheckContent, 'simple'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(CheckContent, 'json'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(CheckContent, 'text'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(CheckContent, 'xml'));
});
