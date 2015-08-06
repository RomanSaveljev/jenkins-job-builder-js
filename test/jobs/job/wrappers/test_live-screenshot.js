var should = require('should');
var LiveScreenshot = require('../../../../lib/jobs/job/wrappers/live-screenshot.js');
var testlib = require('../../../testlib.js');

describe('LiveScreenshot', function() {
  describe('constructor', testlib.describeProxyConstructor(LiveScreenshot));
  describe('object', testlib.describeProxyUppableAndable(LiveScreenshot));
  describe('properties', testlib.describeProxyPrimitiveProperty(LiveScreenshot, 'full-size'));
  describe('properties', testlib.describeProxyPrimitiveProperty(LiveScreenshot, 'thumbnail'));
});
