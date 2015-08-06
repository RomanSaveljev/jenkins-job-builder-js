var should = require('should');
var Exclusion = require('../../../../lib/jobs/job/wrappers/exclusion.js');
var testlib = require('../../../testlib.js');

describe('Exclusion', function() {
  describe('constructor', testlib.describeProxyConstructor(Exclusion));
  describe('object', testlib.describeProxyUppableAndable(Exclusion));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Exclusion, 'resources'));
});
