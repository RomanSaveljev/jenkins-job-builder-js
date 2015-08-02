var should = require('should');
var ParameterFactories = require('../../../../../lib/jobs/job/builders/project/parameter-factories.js');
var testlib = require('../../../../testlib.js');

describe('ParameterFactories', function() {
  describe('constructor', testlib.describeProxyConstructor(ParameterFactories));
  describe('object', testlib.describeProxyUppableAndable(ParameterFactories));
  describe('properties', testlib.describeProxyPrimitiveProperty(ParameterFactories, 'factory'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ParameterFactories, 'file-pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ParameterFactories, 'no-files-found-action'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ParameterFactories, 'from'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ParameterFactories, 'to'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ParameterFactories, 'step'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ParameterFactories, 'parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ParameterFactories, 'validation-fail'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ParameterFactories, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ParameterFactories, 'node-label'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ParameterFactories, 'ignore-offline-nodes'));
});
