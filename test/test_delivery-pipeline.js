var should = require('should');
var DeliveryPipeline = require('../lib/wrappers/delivery-pipeline.js');
var testlib = require('./testlib.js');

describe('DeliveryPipeline', function() {
  describe('constructor', testlib.describeProxyConstructor(DeliveryPipeline));
  describe('object', testlib.describeProxyUppableAndable(DeliveryPipeline));
  describe('properties', testlib.describeObjectProxyProperty(DeliveryPipeline, 'versionTemplate', 'version-template'));
  describe('properties', testlib.describeObjectProxyProperty(DeliveryPipeline, 'setDisplayName', 'set-display-name'));
});
