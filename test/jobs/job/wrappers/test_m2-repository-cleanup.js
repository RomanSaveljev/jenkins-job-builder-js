var should = require('should');
var M2RepositoryCleanup = require('../../../../lib/jobs/job/wrappers/m2-repository-cleanup.js');
var testlib = require('../../../testlib.js');

describe('M2RepositoryCleanup', function() {
  describe('constructor', testlib.describeProxyConstructor(M2RepositoryCleanup));
  describe('object', testlib.describeProxyUppableAndable(M2RepositoryCleanup));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(M2RepositoryCleanup, 'patterns'));
});
