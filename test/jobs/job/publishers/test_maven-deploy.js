var should = require('should');
var MavenDeploy = require('../../../../lib/jobs/job/publishers/maven-deploy.js');
var testlib = require('../../../testlib.js');

describe('MavenDeploy', function() {
  describe('constructor', testlib.describeProxyConstructor(MavenDeploy));
  describe('object', testlib.describeProxyUppableAndable(MavenDeploy));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenDeploy, 'id'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenDeploy, 'url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenDeploy, 'unique-version'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenDeploy, 'deploy-unstable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenDeploy, 'release-env-var'));
});
