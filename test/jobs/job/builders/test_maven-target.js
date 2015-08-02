var should = require('should');
var MavenTarget = require('../../../../lib/jobs/job/builders/maven-target.js');
var testlib = require('../../../testlib.js');

describe('MavenTarget', function() {
  describe('constructor', testlib.describeProxyConstructor(MavenTarget));
  describe('object', testlib.describeProxyUppableAndable(MavenTarget));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenTarget, 'goals'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(MavenTarget, 'properties'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenTarget, 'pom'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenTarget, 'private-repository'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenTarget, 'maven-version'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(MavenTarget, 'java-opts'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenTarget, 'settings'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenTarget, 'global-settings'));
});
