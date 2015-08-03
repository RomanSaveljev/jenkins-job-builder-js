var should = require('should');
var ConditionalPublisher = require('../../../../lib/jobs/job/publishers/conditional-publisher.js');
var testlib = require('../../../testlib.js');
var Publishers = require('../../../../lib/jobs/job/publishers.js');

describe('ConditionalPublisher', function() {
  describe('constructor', testlib.describeProxyConstructor(ConditionalPublisher));
  describe('object', testlib.describeProxyUppableAndable(ConditionalPublisher));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalPublisher, 'condition-kind'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalPublisher, 'condition-expression'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalPublisher, 'condition-worst'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalPublisher, 'condition-best'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalPublisher, 'condition-command'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalPublisher, 'condition-filename'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalPublisher, 'condition-basedir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalPublisher, 'on-evaluation-failure'));
  describe('properties', testlib.describeProxyCustomArrayProperty(ConditionalPublisher, 'action', Publishers));
});
