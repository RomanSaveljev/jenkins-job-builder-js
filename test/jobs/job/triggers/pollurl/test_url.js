var should = require('should');
var Url = require('../../../../../lib/jobs/job/triggers/pollurl/url.js');
var testlib = require('../../../../testlib.js');
var CheckContent = require('../../../../../lib/jobs/job/triggers/pollurl/url/check-content.js');

describe('Url', function() {
  describe('constructor', testlib.describeProxyConstructor(Url));
  describe('object', testlib.describeProxyUppableAndable(Url));
  describe('properties', testlib.describeProxyPrimitiveProperty(Url, 'url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Url, 'proxy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Url, 'timeout'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Url, 'username'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Url, 'password'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Url, 'check-status'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Url, 'check-etag'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Url, 'check-date'));
  describe('properties', testlib.describeProxyObjectArrayProperty(Url, 'check-content', CheckContent));
});
