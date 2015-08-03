var should = require('should');
var Jabber = require('../../../../lib/jobs/job/publishers/jabber.js');
var testlib = require('../../../testlib.js');

describe('Jabber', function() {
  describe('constructor', testlib.describeProxyConstructor(Jabber));
  describe('object', testlib.describeProxyUppableAndable(Jabber));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jabber, 'notify-on-build-start'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jabber, 'notify-scm-committers'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jabber, 'notify-scm-culprits'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jabber, 'notify-upstream-committers'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jabber, 'notify-scm-fixers'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Jabber, 'group-targets'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Jabber, 'individual-targets'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jabber, 'strategy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Jabber, 'message'));
});
