var should = require('should');
var Clean = require('../../../../../lib/jobs/job/scm/git/clean.js');
var testlib = require('../../../../testlib.js');

describe('Clean', function() {
  describe('constructor', testlib.describeProxyConstructor(Clean));
  describe('object', testlib.describeProxyUppableAndable(Clean));
  describe('properties', testlib.describeProxyPrimitiveProperty(Clean, 'after'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Clean, 'before'));
});
