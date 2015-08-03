var should = require('should');
var ChangelogAgainst = require('../../../../../lib/jobs/job/scm/git/changelog-against.js');
var testlib = require('../../../../testlib.js');

describe('ChangelogAgainst', function() {
  describe('constructor', testlib.describeProxyConstructor(ChangelogAgainst));
  describe('object', testlib.describeProxyUppableAndable(ChangelogAgainst));
  describe('properties', testlib.describeProxyPrimitiveProperty(ChangelogAgainst, 'remote'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ChangelogAgainst, 'branch'));
});
