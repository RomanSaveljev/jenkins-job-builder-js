var should = require('should');
var WorkspaceFileScanner = require('../../../../../lib/jobs/job/publishers/warnings/workspace-file-scanner.js');
var testlib = require('../../../../testlib.js');

describe('WorkspaceFileScanner', function() {
  describe('constructor', testlib.describeProxyConstructor(WorkspaceFileScanner));
  describe('object', testlib.describeProxyUppableAndable(WorkspaceFileScanner));
  describe('properties', testlib.describeProxyPrimitiveProperty(WorkspaceFileScanner, 'file-pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(WorkspaceFileScanner, 'scanner'));
});
