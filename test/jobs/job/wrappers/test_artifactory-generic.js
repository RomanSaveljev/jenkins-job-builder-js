var should = require('should');
var ArtifactoryGeneric = require('../../../../lib/jobs/job/wrappers/artifactory-generic.js');
var testlib = require('../../../testlib.js');

describe('ArtifactoryGeneric', function() {
  describe('constructor', testlib.describeProxyConstructor(ArtifactoryGeneric));
  describe('object', testlib.describeProxyUppableAndable(ArtifactoryGeneric));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryGeneric, 'url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryGeneric, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryGeneric, 'repo-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryGeneric, 'snapshot-repo-key'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ArtifactoryGeneric, 'deploy-pattern'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ArtifactoryGeneric, 'resolve-pattern'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ArtifactoryGeneric, 'matrix-params'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryGeneric, 'deploy-build-info'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryGeneric, 'env-vars-include'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ArtifactoryGeneric, 'env-vars-include-patterns'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ArtifactoryGeneric, 'env-vars-exclude-patterns'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryGeneric, 'discard-old-builds'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryGeneric, 'discard-build-artifacts'));
});
