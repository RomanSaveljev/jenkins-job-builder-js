var should = require('should');
var Project = require('../../../../lib/jobs/job/builders/project.js');
var testlib = require('../../../testlib.js');
var Bool = require('../../../../lib/jobs/job/builders/project/bool.js');
var BlockThresholds = require('../../../../lib/jobs/job/builders/project/block-thresholds.js');
var ParameterFactories = require('../../../../lib/jobs/job/builders/project/parameter-factories.js');

describe('Project', function() {
  describe('constructor', testlib.describeProxyConstructor(Project));
  describe('object', testlib.describeProxyUppableAndable(Project));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Project, 'project'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'predefined-parameters'));
  describe('properties', testlib.describeProxyObjectArrayProperty(Project, 'bool-parameters', Bool));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'property-file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'property-file-fail-on-missing'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'current-parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'node-label-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'node-label'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'svn-revision'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'git-revision'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'block'));
  describe('properties', testlib.describeProxyObjectProperty(Project, 'block-thresholds', BlockThresholds));
  describe('properties', testlib.describeProxyPrimitiveProperty(Project, 'same-node'));
  describe('properties', testlib.describeProxyObjectArrayProperty(Project, 'parameter-factories', ParameterFactories));
});
