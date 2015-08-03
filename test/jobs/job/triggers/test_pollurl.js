var should = require('should');
var PollUrl = require('../../../../lib/jobs/job/triggers/pollurl.js');
var testlib = require('../../../testlib.js');
var Url = require('../../../../lib/jobs/job/triggers/pollurl/url.js');

describe('PollUrl', function() {
  describe('constructor', testlib.describeProxyConstructor(PollUrl));
  describe('object', testlib.describeProxyUppableAndable(PollUrl));
  describe('properties', testlib.describeProxyPrimitiveProperty(PollUrl, 'cron'));
  describe('properties', testlib.describeProxyPrimitiveProperty(PollUrl, 'polling-node'));
  describe('properties', testlib.describeProxyObjectArrayProperty(PollUrl, 'urls', Url));
});
