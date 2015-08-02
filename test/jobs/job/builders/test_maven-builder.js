var should = require('should');
var MavenBuilder = require('../../../../lib/jobs/job/builders/maven-builder.js');
var testlib = require('../../../testlib.js');

describe('MavenBuilder', function() {
  describe('constructor', testlib.describeProxyConstructor(MavenBuilder));
  describe('object', testlib.describeProxyUppableAndable(MavenBuilder));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenBuilder, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenBuilder, 'pom'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenBuilder, 'goals'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MavenBuilder, 'maven-opts'));
});
