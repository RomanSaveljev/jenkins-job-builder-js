var should = require('should');
var Dsl = require('../../../../lib/jobs/job/builders/dsl.js');
var testlib = require('../../../testlib.js');

describe('Dsl', function() {
  describe('constructor', testlib.describeProxyConstructor(Dsl));
  describe('object', testlib.describeProxyUppableAndable(Dsl));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dsl, 'script-text'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dsl, 'target'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dsl, 'ignore-existing'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dsl, 'removed-job-action'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dsl, 'removed-view-action'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dsl, 'lookup-strategy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dsl, 'additional-classpath'));
});
