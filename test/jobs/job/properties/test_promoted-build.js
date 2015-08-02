var should = require('should');
var PromotedBuild = require('../../../../lib/jobs/job/properties/promoted-build.js');
var testlib = require('../../../testlib.js');

describe('PromotedBuild', function() {
  describe('constructor', testlib.describeProxyConstructor(PromotedBuild));
  describe('object', testlib.describeProxyUppableAndable(PromotedBuild));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(PromotedBuild, 'names'));
});
