var should = require('should');
var ArtifactResolver = require('../../../../lib/jobs/job/builders/artifact-resolver.js');
var testlib = require('../../../testlib.js');
var Artifact = require('../../../../lib/jobs/job/builders/artifact-resolver/artifact.js');

describe('ArtifactResolver', function() {
  describe('constructor', testlib.describeProxyConstructor(ArtifactResolver));
  describe('object', testlib.describeProxyUppableAndable(ArtifactResolver));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactResolver, 'fail-on-error'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactResolver, 'repository-logging'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactResolver, 'target-directory'));
  describe('properties', testlib.describeProxyObjectArrayProperty(ArtifactResolver, 'artifacts', Artifact));
});
