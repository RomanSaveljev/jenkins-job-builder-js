var should = require('should');
var Hipchat = require('../../../../lib/jobs/job/publishers/hipchat.js');
var testlib = require('../../../testlib.js');

describe('Hipchat', function() {
  describe('constructor', testlib.describeProxyConstructor(Hipchat));
  describe('object', testlib.describeProxyUppableAndable(Hipchat));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'token'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Hipchat, 'rooms'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-start'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-success'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-aborted'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-not-built'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-unstable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-failure'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-back-to-normal'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'start-message'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'complete-message'));
});
