var should = require('should');
var Hipchat = require('../../../lib/jobs/job/hipchat.js');
var testlib = require('../../testlib.js');

describe('Hipchat', function() {
  describe('constructor', testlib.describeProxyConstructor(Hipchat));
  describe('object', testlib.describeProxyUppableAndable(Hipchat));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'enabled'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Hipchat, 'rooms'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-start'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-success'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-aborted'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-not-built'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-unstable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-failure'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Hipchat, 'notify-back-to-normal'));
});
