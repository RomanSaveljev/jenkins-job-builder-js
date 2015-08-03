var should = require('should');
var Jclouds = require('../../../../lib/jobs/job/publishers/jclouds.js');
var testlib = require('../../../testlib.js');

describe('Jclouds', function() {
  describe('constructor', testlib.describeProxyConstructor(Jclouds));
  describe('object', testlib.describeProxyUppableAndable(Jclouds));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jclouds, 'profile'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jclouds, 'files'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jclouds, 'basedir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jclouds, 'container'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jclouds, 'hierarchy'));
});
