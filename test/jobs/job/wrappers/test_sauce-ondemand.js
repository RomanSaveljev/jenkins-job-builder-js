var should = require('should');
var SauceOnDemand = require('../../../../lib/jobs/job/wrappers/sauce-ondemand.js');
var testlib = require('../../../testlib.js');

describe('SauceOnDemand', function() {
  describe('constructor', testlib.describeProxyConstructor(SauceOnDemand));
  describe('object', testlib.describeProxyUppableAndable(SauceOnDemand));
  describe('properties', testlib.describeProxyPrimitiveProperty(SauceOnDemand, 'enable-sauce-connect'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SauceOnDemand, 'sauce-host'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SauceOnDemand, 'sauce-port'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SauceOnDemand, 'override-username'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SauceOnDemand, 'override-api-access-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SauceOnDemand, 'starting-url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SauceOnDemand, 'type'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(SauceOnDemand, 'platforms'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SauceOnDemand, 'launch-sauce-connect-on-slave'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SauceOnDemand, 'https-protocol'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SauceOnDemand, 'sauce-connect-options'));
});
