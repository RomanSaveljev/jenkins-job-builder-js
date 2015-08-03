var should = require('should');
var Stash = require('../../../../lib/jobs/job/publishers/stash.js');
var testlib = require('../../../testlib.js');

describe('Stash', function() {
  describe('constructor', testlib.describeProxyConstructor(Stash));
  describe('object', testlib.describeProxyUppableAndable(Stash));
  describe('properties', testlib.describeProxyPrimitiveProperty(Stash, 'url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Stash, 'username'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Stash, 'password'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Stash, 'ignore-ssl'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Stash, 'commit-sha1'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Stash, 'include-build-number'));
});
