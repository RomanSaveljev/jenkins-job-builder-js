var should = require('should');
var Authorization = require('../../../../lib/jobs/job/properties/authorization.js');
var testlib = require('../../../testlib.js');

describe('Authorization', function() {
  describe('constructor', testlib.describeProxyConstructor(Authorization));
  describe('object', testlib.describeProxyUppableAndable(Authorization));
  describe('properties', testlib.describeProxyNamedPrimitiveArrayProperty(Authorization, 'authorize'));
});
