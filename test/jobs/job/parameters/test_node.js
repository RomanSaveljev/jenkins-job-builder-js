var should = require('should');
var Node = require('../../../../lib/jobs/job/parameters/node.js');
var testlib = require('../../../testlib.js');

describe('Node', function() {
  describe('constructor', testlib.describeProxyConstructor(Node));
  describe('object', testlib.describeProxyUppableAndable(Node));
  describe('properties', testlib.describeProxyPrimitiveProperty(Node, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Node, 'description'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Node, 'default-slaves'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Node, 'allowed-slaves'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Node, 'ignore-offline-nodes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Node, 'allowed-multiselect'));
});
