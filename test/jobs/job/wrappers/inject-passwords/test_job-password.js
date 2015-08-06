var should = require('should');
var JobPassword = require('../../../../../lib/jobs/job/wrappers/inject-passwords/job-password.js');
var testlib = require('../../../../testlib.js');

describe('JobPassword', function() {
  describe('constructor', testlib.describeProxyConstructor(JobPassword));
  describe('object', testlib.describeProxyUppableAndable(JobPassword));
  describe('properties', testlib.describeProxyPrimitiveProperty(JobPassword, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(JobPassword, 'password'));
});
