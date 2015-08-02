var should = require('should');
var Channel = require('../../../../../lib/jobs/job/publishers/ircbot/channel.js');
var testlib = require('../../../../testlib.js');

describe('Channel', function() {
  describe('constructor', testlib.describeProxyConstructor(Channel));
  describe('object', testlib.describeProxyUppableAndable(Channel));
  describe('properties', testlib.describeProxyPrimitiveProperty(Channel, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Channel, 'password'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Channel, 'notify-only'));
});
