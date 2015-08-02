var should = require('should');
var Notifications = require('../../../../lib/jobs/job/notifications/http.js');
var testlib = require('../../../testlib.js');

describe('Notifications', function() {
  describe('constructor', testlib.describeProxyConstructor(Notifications));
  describe('object', testlib.describeProxyUppableAndable(Notifications));
  describe('properties', testlib.describeProxyPrimitiveProperty(Notifications, 'format'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Notifications, 'event'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Notifications, 'url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Notifications, 'timeout'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Notifications, 'log'));
});
