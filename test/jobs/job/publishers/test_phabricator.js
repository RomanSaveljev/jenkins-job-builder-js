var should = require('should');
var Phabricator = require('../../../../lib/jobs/job/publishers/phabricator.js');
var testlib = require('../../../testlib.js');

describe('Phabricator', function() {
  describe('constructor', testlib.describeProxyConstructor(Phabricator));
  describe('object', testlib.describeProxyUppableAndable(Phabricator));
  describe('properties', testlib.describeProxyPrimitiveProperty(Phabricator, 'comment-on-success'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Phabricator, 'uberalls-enabled'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Phabricator, 'comment-file'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Phabricator, 'comment-size'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Phabricator, 'comment-with-console-link-on-failure'));
});
