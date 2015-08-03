var should = require('should');
var DescriptionSetter = require('../../../../lib/jobs/job/publishers/description-setter.js');
var testlib = require('../../../testlib.js');

describe('DescriptionSetter', function() {
  describe('constructor', testlib.describeProxyConstructor(DescriptionSetter));
  describe('object', testlib.describeProxyUppableAndable(DescriptionSetter));
  describe('properties', testlib.describeProxyPrimitiveProperty(DescriptionSetter, 'regexp'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DescriptionSetter, 'regexp-for-failed'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DescriptionSetter, 'description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DescriptionSetter, 'description-for-failed'));
  describe('properties', testlib.describeProxyPrimitiveProperty(DescriptionSetter, 'set-for-matrix'));
});
