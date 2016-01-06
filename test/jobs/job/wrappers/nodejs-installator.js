var should = require('should');
var NodeJsInstallator = require('../../../../lib/jobs/job/wrappers/nodejs-installator.js');
var testlib = require('../../../testlib.js');

describe('NodeJsInstallator', function() {
  describe('constructor', testlib.describeProxyConstructor(NodeJsInstallator));
  describe('object', testlib.describeProxyUppableAndable(NodeJsInstallator));
  describe('properties', testlib.describeProxyPrimitiveProperty(NodeJsInstallator, 'name'));
});
