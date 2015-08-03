var should = require('should');
var Repo = require('../../../../lib/jobs/job/scm/repo.js');
var testlib = require('../../../testlib.js');

describe('Repo', function() {
  describe('constructor', testlib.describeProxyConstructor(Repo));
  describe('object', testlib.describeProxyUppableAndable(Repo));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'manifest-url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'manifest-branch'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'manifest-file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'manifest-group'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'destination-dir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'repo-url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'mirror-dir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'jobs'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'current-branch'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'quiet'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'local-manifest'));
});
