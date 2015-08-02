var should = require('should');
var Maven = require('../../../lib/jobs/job/maven.js');
var testlib = require('../../testlib.js');
var RootModule = require('../../../lib/jobs/job/maven/root-module.js');

describe('Maven', function() {
  describe('constructor', testlib.describeProxyConstructor(Maven));
  describe('object', testlib.describeProxyUppableAndable(Maven));
  describe('properties', testlib.describeProxyObjectProperty(Maven, 'root-module', RootModule));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'root-pom'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'goals'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'maven-opts'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'maven-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'private-repository'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'ignore-upstream-changes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'incremental-build'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'automatic-archiving'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'automatic-site-archiving'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'automatic-fingerprinting'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'parallel-build-modules'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'resolve-dependencies'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'run-headless'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'process-plugins'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'custom-workspace'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'settings'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'global-settings'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Maven, 'post-step-run-condition'));
});
