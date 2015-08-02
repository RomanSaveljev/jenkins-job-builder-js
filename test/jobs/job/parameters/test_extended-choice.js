var should = require('should');
var ExtendedChoice = require('../../../../lib/jobs/job/parameters/extended-choice.js');
var testlib = require('../../../testlib.js');

describe('ExtendedChoice', function() {
  describe('constructor', testlib.describeProxyConstructor(ExtendedChoice));
  describe('object', testlib.describeProxyUppableAndable(ExtendedChoice));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExtendedChoice, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExtendedChoice, 'description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExtendedChoice, 'property-file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExtendedChoice, 'property-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExtendedChoice, 'quote-value'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExtendedChoice, 'visible-items'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExtendedChoice, 'type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExtendedChoice, 'value'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExtendedChoice, 'default-value'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExtendedChoice, 'default-property-file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExtendedChoice, 'default-property-key'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ExtendedChoice, 'multi-select-delimiter'));
});
