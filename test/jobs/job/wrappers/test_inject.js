var should = require('should');
var Inject = require('../../../../lib/jobs/job/wrappers/inject.js');
var testlib = require('../../../testlib.js');

describe('Inject', function() {
  describe('constructor', testlib.describeProxyConstructor(Inject));
  describe('object', testlib.describeProxyUppableAndable(Inject));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'properties-file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'properties-content'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'script-file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Inject, 'script-content'));
});
