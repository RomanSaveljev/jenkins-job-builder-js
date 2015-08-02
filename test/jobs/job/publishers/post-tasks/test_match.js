var should = require('should');
var Match = require('../../../../../lib/jobs/job/publishers/post-tasks/match.js');
var testlib = require('../../../../testlib.js');

describe('Match', function() {
  describe('constructor', testlib.describeProxyConstructor(Match));
  describe('object', testlib.describeProxyUppableAndable(Match));
  describe('properties', testlib.describeProxyPrimitiveProperty(Match, 'log-text'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Match, 'operator'));
});
