var should = require('should');
var WorkspaceCleanup = require('../lib/wrappers/workspace-cleanup.js');
var testlib = require('./testlib.js');

describe('WorkspaceCleanup', function() {
  describe('constructor', testlib.describeProxyConstructor(WorkspaceCleanup));
  describe('object', testlib.describeProxyUppableAndable(WorkspaceCleanup));
  describe('properties', testlib.describePrimitiveArrayProxyProperty(WorkspaceCleanup, 'include'));
  describe('properties', testlib.describePrimitiveArrayProxyProperty(WorkspaceCleanup, 'exclude'));
  describe('properties', testlib.describeObjectProxyProperty(WorkspaceCleanup, 'dirmatch'));
});
