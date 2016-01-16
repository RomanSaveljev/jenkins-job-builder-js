var should = require('should');
var CopyArtifact = require('../../../../lib/jobs/job/builders/copyartifact.js');
var testlib = require('../../../testlib.js');

describe('CopyArtifact', function() {
  describe('constructor', testlib.describeProxyConstructor(CopyArtifact));
  describe('object', testlib.describeProxyUppableAndable(CopyArtifact));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'project'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'filter'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'target'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'flatten'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'optional'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'which-build'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'build-number'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'permalink'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'stable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'fallback-to-last-successful'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'param'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'parameter-filters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'do-not-fingerprint'));
});
