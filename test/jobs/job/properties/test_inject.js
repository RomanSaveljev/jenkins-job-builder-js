var should = require('should');
var Inject = require('../../../../lib/jobs/job/properties/inject.js');
var testlib = require('../../../testlib.js');

describe('Inject', function() {
  describe('constructor', testlib.describeProxyConstructor(Inject));
  describe('object', testlib.describeProxyUppableAndable(Inject));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'properties-file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'properties-content'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'script-file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'script-content'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'groovy-content'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'load-from-master'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'enabled'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'keep-system-variables'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'keep-build-variables'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'override-build-parameters'));
});
