var should = require('should');
var ShiningPanda = require('../../../../lib/jobs/job/builders/shining-panda.js');
var testlib = require('../../../testlib.js');

describe('ShiningPanda', function() {
  describe('constructor', testlib.describeProxyConstructor(ShiningPanda));
  describe('object', testlib.describeProxyUppableAndable(ShiningPanda));
  describe('properties', testlib.describeProxyPrimitiveProperty(ShiningPanda, 'build-environment'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ShiningPanda, 'python-version'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ShiningPanda, 'home'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ShiningPanda, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ShiningPanda, 'clear'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ShiningPanda, 'use-distribute'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ShiningPanda, 'system-site-packages'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ShiningPanda, 'nature'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ShiningPanda, 'command'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ShiningPanda, 'ignore-exit-code'));
});
