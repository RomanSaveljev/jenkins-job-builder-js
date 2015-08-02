var should = require('should');
var IrcBot = require('../../../../lib/jobs/job/publishers/ircbot.js');
var testlib = require('../../../testlib.js');
var Channel = require('../../../../lib/jobs/job/publishers/ircbot/channel.js');

describe('IrcBot', function() {
  describe('constructor', testlib.describeProxyConstructor(IrcBot));
  describe('object', testlib.describeProxyUppableAndable(IrcBot));
  describe('properties', testlib.describeProxyPrimitiveProperty(IrcBot, 'strategy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(IrcBot, 'notify-start'));
  describe('properties', testlib.describeProxyPrimitiveProperty(IrcBot, 'notify-committers'));
  describe('properties', testlib.describeProxyPrimitiveProperty(IrcBot, 'notify-culprits'));
  describe('properties', testlib.describeProxyPrimitiveProperty(IrcBot, 'notify-upstream'));
  describe('properties', testlib.describeProxyPrimitiveProperty(IrcBot, 'notify-fixers'));
  describe('properties', testlib.describeProxyPrimitiveProperty(IrcBot, 'message-type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(IrcBot, 'matrix-notifier'));
  describe('properties', testlib.describeProxyObjectArrayProperty(IrcBot, 'channels', Channel));
});
