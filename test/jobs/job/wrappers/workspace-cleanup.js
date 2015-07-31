var should = require('should');
var WorkspaceCleanup = require('../../../../lib/jobs/job/wrappers/workspace-cleanup.js');
var testlib = require('../../../testlib.js');

describe('WorkspaceCleanup', function() {
  describe('constructor', testlib.describeProxyConstructor(WorkspaceCleanup));
  describe('object', testlib.describeProxyUppableAndable(WorkspaceCleanup));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(WorkspaceCleanup, 'include'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(WorkspaceCleanup, 'exclude'));
  describe('properties', testlib.describeProxyPrimitiveProperty(WorkspaceCleanup, 'dirmatch'));
});
