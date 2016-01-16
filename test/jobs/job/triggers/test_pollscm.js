var should = require('should');
var PollScm = require('../../../../lib/jobs/job/triggers/pollscm.js');
var testlib = require('../../../testlib.js');

describe('PollScm', function() {
  describe('constructor', testlib.describeProxyConstructor(PollScm));
  describe('object', testlib.describeProxyUppableAndable(PollScm));
  describe('properties', testlib.describeProxyPrimitiveProperty(PollScm, 'cron'));
  describe('properties', testlib.describeProxyPrimitiveProperty(PollScm, 'ignore-post-commit-hooks'));
});
