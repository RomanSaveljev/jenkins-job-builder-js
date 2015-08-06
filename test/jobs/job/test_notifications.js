var should = require('should');
var Notifications = require('../../../lib/jobs/job/notifications.js');
var testlib = require('../../testlib.js');
var Http = require('../../../lib/jobs/job/notifications/http.js');

describe('Notifications', function() {
  describe('constructor', testlib.describeProxyConstructor(Notifications));
  describe('object', testlib.describeProxyUppableAndable(Notifications));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Notifications, 'http', Http));
});
