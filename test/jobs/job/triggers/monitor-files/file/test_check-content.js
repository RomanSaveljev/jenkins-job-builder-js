var should = require('should');
var CheckContent = require('../../../../../../lib/jobs/job/triggers/monitor-files/file/check-content.js');
var testlib = require('../../../../../testlib.js');
var MonitorKeys = require('../../../../../../lib/jobs/job/triggers/monitor-files/file/monitor-keys.js');

describe('CheckContent', function() {
  describe('constructor', testlib.describeProxyConstructor(CheckContent));
  describe('object', testlib.describeProxyUppableAndable(CheckContent));
  describe('properties', testlib.describeProxyKeyedPrimitiveProperty(CheckContent, 'simple'));
  describe('properties', testlib.describeProxyKeyedPrimitiveProperty(CheckContent, 'jar'));
  describe('properties', testlib.describeProxyKeyedPrimitiveProperty(CheckContent, 'tar'));
  describe('properties', testlib.describeProxyKeyedPrimitiveProperty(CheckContent, 'zip'));
  //describe('properties', testlib.describeProxyKeyedArrayProperty(CheckContent, 'source-manifest', MonitorKeys));
  //describe('properties', testlib.describeProxyKeyedArrayProperty(CheckContent, 'jar-manifest', MonitorKeys));
  //describe('properties', testlib.describeProxyKeyedArrayProperty(CheckContent, 'properties', MonitorKeys));
  describe('properties', testlib.describeProxyKeyedPrimitiveArrayProperty(CheckContent, 'xml'));
  describe('properties', testlib.describeProxyKeyedPrimitiveArrayProperty(CheckContent, 'text'));
});
