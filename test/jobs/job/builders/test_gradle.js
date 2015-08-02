var should = require('should');
var Gradle = require('../../../../lib/jobs/job/builders/gradle.js');
var testlib = require('../../../testlib.js');

describe('Gradle', function() {
  describe('constructor', testlib.describeProxyConstructor(Gradle));
  describe('object', testlib.describeProxyUppableAndable(Gradle));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gradle, 'tasks'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gradle, 'gradle-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gradle, 'wrapper'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gradle, 'executable'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Gradle, 'switches'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gradle, 'use-root-dir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gradle, 'root-build-script-dir'));
});
