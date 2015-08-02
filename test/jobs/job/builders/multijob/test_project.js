var should = require('should');
var Project = require('../../../../../lib/jobs/job/builders/multijob/project.js');
var testlib = require('../../../../testlib.js');

describe('Project', function() {
  describe('constructor', testlib.describeProxyConstructor(Project));
  describe('object', testlib.describeProxyUppableAndable(Project));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'current-parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'node-label-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'node-label'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'git-revision'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'property-file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'predefined-parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'enable-condition'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'kill-phase-on'));
});
