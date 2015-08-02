var should = require('should');
var Html = require('../../../../../lib/jobs/job/publishers/cloverphp/html.js');
var testlib = require('../../../../testlib.js');

describe('Html', function() {
  describe('constructor', testlib.describeProxyConstructor(Html));
  describe('object', testlib.describeProxyUppableAndable(Html));
  describe('properties', testlib.describeProxyPrimitiveProperty(Html, 'dir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Html, 'archive'));
});
