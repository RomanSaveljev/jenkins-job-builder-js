var should = require('should');
var Workspace = require('../../../../lib/jobs/job/scm/workspace.js');
var testlib = require('../../../testlib.js');

describe('Workspace', function() {
  describe('constructor', testlib.describeProxyConstructor(Workspace));
  describe('object', testlib.describeProxyUppableAndable(Workspace));
  describe('properties', testlib.describeProxyPrimitiveProperty(Workspace, 'parent-job'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Workspace, 'criteria'));
});
