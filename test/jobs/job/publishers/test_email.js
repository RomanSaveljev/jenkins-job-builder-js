var should = require('should');
var Email = require('../../../../lib/jobs/job/publishers/email.js');
var testlib = require('../../../testlib.js');

describe('Email', function() {
  describe('constructor', testlib.describeProxyConstructor(Email));
  describe('object', testlib.describeProxyUppableAndable(Email));
  describe('properties', testlib.describeProxyPrimitiveProperty(Email, 'recipients'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Email, 'notify-every-unstable-build'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Email, 'send-to-individuals'));
});
