var should = require('should');
var ArtifactDeployer = require('../../../../lib/jobs/job/publishers/artifact-deployer.js');
var testlib = require('../../../testlib.js');
var Entry = require('../../../../lib/jobs/job/publishers/artifact-deployer/entry.js');

describe('ArtifactDeployer', function() {
  describe('constructor', testlib.describeProxyConstructor(ArtifactDeployer));
  describe('object', testlib.describeProxyUppableAndable(ArtifactDeployer));
  describe('properties', testlib.describeProxyObjectArrayProperty(ArtifactDeployer, 'entries', Entry));
  describe('properties', testlib.describeProxyPrimitiveProperty(ArtifactDeployer, 'deploy-if-fail'));
});
