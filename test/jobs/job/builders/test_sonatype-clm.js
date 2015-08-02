var should = require('should');
var SonatypeClm = require('../../../../lib/jobs/job/builders/sonatype-clm.js');
var testlib = require('../../../testlib.js');

describe('SonatypeClm', function() {
  describe('constructor', testlib.describeProxyConstructor(SonatypeClm));
  describe('object', testlib.describeProxyUppableAndable(SonatypeClm));
  describe('properties', testlib.describeProxyPrimitiveProperty(SonatypeClm, 'application-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SonatypeClm, 'fail-on-clm-server-failure'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SonatypeClm, 'stage'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SonatypeClm, 'scan-targets'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SonatypeClm, 'module-excludes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SonatypeClm, 'advanced-options'));
});
