var should = require('should');
var Properties = require('../../../../../lib/jobs/job/builders/ant/properties.js');
var testlib = require('../../../../testlib.js');

describe('Properties', function() {
  describe('constructor', testlib.describeProxyConstructor(Properties));
  describe('object', testlib.describeProxyUppableAndable(Properties));
  describe('properties', testlib.describeProxyNamedPrimitiveProperty(Properties, 'define'));
});
