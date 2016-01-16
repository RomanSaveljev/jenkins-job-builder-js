var should = require('should');
var Repo = require('../../../../../lib/jobs/job/scm/cvs/repo.js');
var testlib = require('../../../../testlib.js');
var Location = require('../../../../../lib/jobs/job/scm/cvs/repo/location.js');

describe('Repo', function() {
  describe('constructor', testlib.describeProxyConstructor(Repo));
  describe('object', testlib.describeProxyUppableAndable(Repo));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'root'));
  describe('properties', testlib.describeProxyObjectArrayProperty(Repo, 'locations', Location));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Repo, 'excluded-regions'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'compression-level'));
});
