var should = require('should');
var WorkspaceCleanup = require('../../../../lib/jobs/job/publishers/workspace-cleanup.js');
var testlib = require('../../../testlib.js');
var CleanIf = require('../../../../lib/jobs/job/publishers/workspace-cleanup/clean-if.js');

describe('WorkspaceCleanup', function() {
  describe('constructor', testlib.describeProxyConstructor(WorkspaceCleanup));
  describe('object', testlib.describeProxyUppableAndable(WorkspaceCleanup));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(WorkspaceCleanup, 'include'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(WorkspaceCleanup, 'exclude'));
  describe('properties', testlib.describeProxyPrimitiveProperty(WorkspaceCleanup, 'dirmatch'));
  describe('properties', testlib.describeProxyObjectArrayProperty(WorkspaceCleanup, 'clean-if', CleanIf));
  describe('properties', testlib.describeProxyPrimitiveProperty(WorkspaceCleanup, 'fail-build'));
  describe('properties', testlib.describeProxyPrimitiveProperty(WorkspaceCleanup, 'clean-parent'));
});
