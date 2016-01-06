var should = require('should');
var Gitlab = require('../../../../lib/jobs/job/triggers/gitlab.js');
var testlib = require('../../../testlib.js');

describe('Gitlab', function() {
  describe('constructor', testlib.describeProxyConstructor(Gitlab));
  describe('object', testlib.describeProxyUppableAndable(Gitlab));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gitlab, 'trigger-push'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gitlab, 'trigger-merge-request'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gitlab, 'trigger-open-merge-request-push'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gitlab, 'ci-skip'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gitlab, 'set-build-description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gitlab, 'add-note-merge-request'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gitlab, 'add-vote-merge-request'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Gitlab, 'allow-all-branches'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Gitlab, 'include-branches'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Gitlab, 'exclude-branches'));
});
