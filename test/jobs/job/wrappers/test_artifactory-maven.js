var should = require('should');
var ArtifactoryMaven = require('../../../../lib/jobs/job/wrappers/artifactory-maven.js');
var testlib = require('../../../testlib.js');

describe('ArtifactoryMaven', function() {
  describe('constructor', testlib.describeProxyConstructor(ArtifactoryMaven));
  describe('object', testlib.describeProxyUppableAndable(ArtifactoryMaven));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMaven, 'url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMaven, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMaven, 'repo-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMaven, 'release-repo-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactoryMaven, 'snapshot-repo-key'));
});
