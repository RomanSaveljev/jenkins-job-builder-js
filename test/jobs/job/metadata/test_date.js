var should = require('should');
var Date = require('../../../../lib/jobs/job/metadata/date.js');
var testlib = require('../../../testlib.js');

describe('Date', function() {
  describe('constructor', testlib.describeProxyConstructor(Date));
  describe('object', testlib.describeProxyUppableAndable(Date));
  describe('properties', testlib.describeProxyPrimitiveProperty(Date, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Date, 'time'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Date, 'timezone'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Date, 'expose-to-env'));
});
