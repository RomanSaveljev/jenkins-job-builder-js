var should = require('should');
var ArtifactoryMavenFreeStyle = require('../../../../lib/jobs/job/wrappers/artifactory-maven-freestyle.js');
var testlib = require('../../../testlib.js');

describe('ArtifactoryMavenFreeStyle', function() {
  describe('constructor', testlib.describeProxyConstructor(ArtifactoryMavenFreeStyle));
  describe('object', testlib.describeProxyUppableAndable(ArtifactoryMavenFreeStyle));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'release-repo-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'snapshot-repo-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'publish-build-info'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'discard-old-builds'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'discard-build-artifacts'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'include-env-vars'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'run-checks'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'include-publish-artifacts'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'license-auto-discovery'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'enable-issue-tracker-integration'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'aggregate-build-issues'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'filter-excluded-artifacts-from-build'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'scopes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'violation-recipients'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ArtifactoryMavenFreeStyle, 'matrix-params'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'black-duck-app-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'black-duck-app-version'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'black-duck-report-recipients'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'black-duck-scopes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'black-duck-run-checks'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'black-duck-include-published-artifacts'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'auto-create-missing-component-requests'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'auto-discard-stale-component-requests'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'deploy-artifacts'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ArtifactoryMavenFreeStyle, 'deployment-include-patterns'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ArtifactoryMavenFreeStyle, 'deployment-exclude-patterns'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMavenFreeStyle, 'env-vars-include'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ArtifactoryMavenFreeStyle, 'env-vars-include-patterns'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ArtifactoryMavenFreeStyle, 'env-vars-exclude-patterns'));
});