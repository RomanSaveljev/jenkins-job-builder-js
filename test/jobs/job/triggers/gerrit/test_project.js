var should = require('should');
var Project = require('../../../../../lib/jobs/job/triggers/gerrit/project.js');
var testlib = require('../../../../testlib.js');
var Branch = require('../../../../../lib/jobs/job/triggers/gerrit/project/branch.js');
var FilePath = require('../../../../../lib/jobs/job/triggers/gerrit/project/file-path.js');
var Topic = require('../../../../../lib/jobs/job/triggers/gerrit/project/topic.js');

describe('Project', function() {
  describe('constructor', testlib.describeProxyConstructor(Project));
  describe('object', testlib.describeProxyUppableAndable(Project));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'project-compare-type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'project-pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'branch-compare-type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'branch-pattern'));
  describe('properties', testlib.describeProxyObjectArrayProperty(Project, 'branches', Branch));
  describe('properties', testlib.describeProxyObjectArrayProperty(Project, 'file-paths', FilePath));
  describe('properties', testlib.describeProxyObjectArrayProperty(Project, 'forbidden-file-paths', FilePath));
  describe('properties', testlib.describeProxyObjectArrayProperty(Project, 'topics', Topic));
});
