var should = require('should');
var Repo = require('../../../../../lib/jobs/job/scm/svn/repo.js');
var testlib = require('../../../../testlib.js');

describe('Repo', function() {
  describe('constructor', testlib.describeProxyConstructor(Repo));
  describe('object', testlib.describeProxyUppableAndable(Repo));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'basedir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Repo, 'credentials-id'));
});
