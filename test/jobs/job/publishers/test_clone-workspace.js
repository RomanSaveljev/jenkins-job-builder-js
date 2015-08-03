var should = require('should');
var CloneWorkspace = require('../../../../lib/jobs/job/publishers/clone-workspace.js');
var testlib = require('../../../testlib.js');

describe('CloneWorkspace', function() {
  describe('constructor', testlib.describeProxyConstructor(CloneWorkspace));
  describe('object', testlib.describeProxyUppableAndable(CloneWorkspace));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloneWorkspace, 'workspace-glob'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloneWorkspace, 'workspace-exclude-glob'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloneWorkspace, 'criteria'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloneWorkspace, 'archive-method'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CloneWorkspace, 'override-default-excludes'));
});
