var should = require('should');
var Jacoco = require('../../../../lib/jobs/job/publishers/jacoco.js');
var testlib = require('../../../testlib.js');
var Targets = require('../../../../lib/jobs/job/publishers/jacoco/targets.js');

describe('Jacoco', function() {
  describe('constructor', testlib.describeProxyConstructor(Jacoco));
  describe('object', testlib.describeProxyUppableAndable(Jacoco));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jacoco, 'exec-pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jacoco, 'class-pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jacoco, 'source-pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jacoco, 'update-build-status'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jacoco, 'inclusion-pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jacoco, 'exclusion-pattern'));
  describe('properties', testlib.describeProxyCustomArrayProperty(Jacoco, 'targets', Targets));
});
