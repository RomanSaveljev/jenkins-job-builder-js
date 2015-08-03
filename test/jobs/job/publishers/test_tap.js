var should = require('should');
var Tap = require('../../../../lib/jobs/job/publishers/tap.js');
var testlib = require('../../../testlib.js');

describe('Tap', function() {
  describe('constructor', testlib.describeProxyConstructor(Tap));
  describe('object', testlib.describeProxyUppableAndable(Tap));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tap, 'results'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tap, 'fail-if-no-results'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tap, 'failed-tests-mark-build-as-failure'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tap, 'output-tap-to-console'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tap, 'enable-subtests'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tap, 'discard-old-reports'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tap, 'todo-is-failure'));
});
