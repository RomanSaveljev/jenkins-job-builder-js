var should = require('should');
var SiteMonitor = require('../../../../lib/jobs/job/publishers/sitemonitor.js');
var testlib = require('../../../testlib.js');
var Site = require('../../../../lib/jobs/job/publishers/sitemonitor/site.js');

describe('SiteMonitor', function() {
  describe('constructor', testlib.describeProxyConstructor(SiteMonitor));
  describe('object', testlib.describeProxyUppableAndable(SiteMonitor));
  describe('properties', testlib.describeProxyObjectArrayProperty(SiteMonitor, 'sites', Site));
});
