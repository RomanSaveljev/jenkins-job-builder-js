var should = require('should');
var BooleanParameters = require('../../../../../lib/jobs/job/publishers/trigger-parameterized-build/boolean-parameters.js');
var testlib = require('../../../../testlib.js');

describe('BooleanParameters', function() {
  describe('constructor', testlib.describeProxyConstructor(BooleanParameters));
  describe('object', testlib.describeProxyUppableAndable(BooleanParameters));
  describe('properties', testlib.describeProxyNamedPrimitiveProperty(BooleanParameters, 'define'));
});
