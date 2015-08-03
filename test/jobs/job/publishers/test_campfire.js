var should = require('should');
var CampFire = require('../../../../lib/jobs/job/publishers/campfire.js');
var testlib = require('../../../testlib.js');

describe('CampFire', function() {
  describe('constructor', testlib.describeProxyConstructor(CampFire));
  describe('object', testlib.describeProxyUppableAndable(CampFire));
  describe('properties', testlib.describeProxyPrimitiveProperty(CampFire, 'subdomain'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CampFire, 'token'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CampFire, 'ssl'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CampFire, 'room'));
});
