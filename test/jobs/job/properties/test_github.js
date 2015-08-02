var should = require('should');
var Github = require('../../../../lib/jobs/job/properties/github.js');
var testlib = require('../../../testlib.js');

describe('Github', function() {
  describe('constructor', testlib.describeProxyConstructor(Github));
  describe('object', testlib.describeProxyUppableAndable(Github));
  describe('properties', testlib.describeProxyPrimitiveProperty(Github, 'url'));
});
