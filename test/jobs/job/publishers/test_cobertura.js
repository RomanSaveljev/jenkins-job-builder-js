var should = require('should');
var Cobertura = require('../../../../lib/jobs/job/publishers/cobertura.js');
var testlib = require('../../../testlib.js');
var Targets = require('../../../../lib/jobs/job/publishers/cobertura/targets.js');

describe('Cobertura', function() {
  describe('constructor', testlib.describeProxyConstructor(Cobertura));
  describe('object', testlib.describeProxyUppableAndable(Cobertura));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cobertura, 'report-file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cobertura, 'only-stable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cobertura, 'fail-no-reports'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cobertura, 'fail-unhealthy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cobertura, 'fail-unstable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cobertura, 'health-auto-update'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cobertura, 'stability-auto-update'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cobertura, 'zoom-coverage-chart'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cobertura, 'source-encoding'));
  describe('properties', testlib.describeProxyCustomArrayProperty(Cobertura, 'targets', Targets));
});
