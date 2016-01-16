var should = require('should');
var CopyArtifacBuildSelector = require('../../../../lib/jobs/job/parameters/copyartifact-build-selector.js');
var testlib = require('../../../testlib.js');

describe('CopyArtifacBuildSelector', function() {
  describe('constructor', testlib.describeProxyConstructor(CopyArtifacBuildSelector));
  describe('object', testlib.describeProxyUppableAndable(CopyArtifacBuildSelector));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifacBuildSelector, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifacBuildSelector, 'description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifacBuildSelector, 'which-build'));
});
