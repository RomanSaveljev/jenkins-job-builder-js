var should = require('should');
var WebAccess = require('../../../../../lib/jobs/job/scm/tfs/web-access.js');
var testlib = require('../../../../testlib.js');

describe('WebAccess', function() {
  describe('constructor', testlib.describeProxyConstructor(WebAccess));
  describe('object', testlib.describeProxyUppableAndable(WebAccess));
  describe('properties', testlib.describeProxyPrimitiveProperty(WebAccess, 'web-url'));
});
