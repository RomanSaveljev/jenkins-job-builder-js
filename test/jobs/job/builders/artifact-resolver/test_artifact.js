var should = require('should');
var Artifact = require('../../../../../lib/jobs/job/builders/artifact-resolver/artifact.js');
var testlib = require('../../../../testlib.js');

describe('Artifact', function() {
  describe('constructor', testlib.describeProxyConstructor(Artifact));
  describe('object', testlib.describeProxyUppableAndable(Artifact));
  describe('properties', testlib.describeProxyPrimitiveProperty(Artifact, 'group-id'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Artifact, 'artifact-id'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Artifact, 'version'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Artifact, 'classifier'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Artifact, 'extension'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Artifact, 'target-file-name'));
});
