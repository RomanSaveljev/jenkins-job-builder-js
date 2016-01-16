var should = require('should');
var DeliveryPipeline = require('../../../../lib/jobs/job/properties/delivery-pipeline.js');
var testlib = require('../../../testlib.js');

describe('DeliveryPipeline', function() {
  describe('constructor', testlib.describeProxyConstructor(DeliveryPipeline));
  describe('object', testlib.describeProxyUppableAndable(DeliveryPipeline));
  describe('properties', testlib.describeProxyPrimitiveProperty(DeliveryPipeline, 'stage'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DeliveryPipeline, 'task'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DeliveryPipeline, 'description'));
});
