var should = require('should');
var Svn = require('../../../../lib/jobs/job/scm/svn.js');
var testlib = require('../../../testlib.js');
var Repo = require('../../../../lib/jobs/job/scm/svn/repo.js');

describe('Svn', function() {
  describe('constructor', testlib.describeProxyConstructor(Svn));
  describe('object', testlib.describeProxyUppableAndable(Svn));
  describe('properties', testlib.describeProxyPrimitiveProperty(Svn, 'url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Svn, 'basedir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Svn, 'credentials-id'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Svn, 'workspaceupdater'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Svn, 'excluded-users'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Svn, 'included-regions'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Svn, 'excluded-regions'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Svn, 'excluded-commit-messages'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Svn, 'exclusion-revprop-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Svn, 'ignore-property-changes-on-directories'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Svn, 'filter-changelog'));
  describe('properties', testlib.describeProxyObjectArrayProperty(Svn, 'repos', Repo));
});
