var should = require('should');
var Site = require('../../../../../lib/jobs/job/publishers/sitemonitor/site.js');
var testlib = require('../../../../testlib.js');

describe('Site', function() {
  describe('constructor', testlib.describeProxyConstructor(Site));
  describe('object', testlib.describeProxyUppableAndable(Site));
  describe('properties', testlib.describeProxyPrimitiveProperty(Site, 'url'));
});
