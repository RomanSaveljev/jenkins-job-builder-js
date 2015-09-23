var should = require('should');
var TriggerParameterizedBuild = require('../../../../lib/jobs/job/publishers/trigger-parameterized-build.js');
var testlib = require('../../../testlib.js');

describe('TriggerParameterizedBuild', function() {
  describe('constructor', testlib.describeProxyConstructor(TriggerParameterizedBuild));
  describe('object', testlib.describeProxyUppableAndable(TriggerParameterizedBuild));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(TriggerParameterizedBuild, 'project'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerParameterizedBuild, 'predefined-parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerParameterizedBuild, 'current-parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerParameterizedBuild, 'node-parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerParameterizedBuild, 'svn-revision'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerParameterizedBuild, 'git-revision'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerParameterizedBuild, 'condition'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerParameterizedBuild, 'property-file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerParameterizedBuild, 'fail-on-missing'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerParameterizedBuild, 'trigger-with-no-params'));  
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerParameterizedBuild, 'restrict-matrix-project'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerParameterizedBuild, 'node-label-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerParameterizedBuild, 'node-label'));
});
