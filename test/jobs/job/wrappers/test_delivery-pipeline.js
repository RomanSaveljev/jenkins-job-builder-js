var should = require('should');
var DeliveryPipeline = require('../../../../lib/jobs/job/wrappers/delivery-pipeline.js');
var testlib = require('../../../testlib.js');

describe('DeliveryPipeline', function() {
  describe('constructor', testlib.describeProxyConstructor(DeliveryPipeline));
  describe('object', testlib.describeProxyUppableAndable(DeliveryPipeline));
  describe('properties', testlib.describeProxyPrimitiveProperty(DeliveryPipeline, 'version-template'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DeliveryPipeline, 'set-display-name'));
});
