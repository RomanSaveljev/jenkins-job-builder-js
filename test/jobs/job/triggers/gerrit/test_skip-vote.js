var should = require('should');
var SkipVote = require('../../../../../lib/jobs/job/triggers/gerrit/skip-vote.js');
var testlib = require('../../../../testlib.js');

describe('SkipVote', function() {
  describe('constructor', testlib.describeProxyConstructor(SkipVote));
  describe('object', testlib.describeProxyUppableAndable(SkipVote));
  describe('properties', testlib.describeProxyPrimitiveProperty(SkipVote, 'successful'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SkipVote, 'failed'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SkipVote, 'unstable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SkipVote, 'notbuilt'));
});
