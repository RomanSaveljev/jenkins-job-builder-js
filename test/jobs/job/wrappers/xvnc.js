var should = require('should');
var Xvnc = require('../../../../lib/jobs/job/wrappers/xvnc.js');
var testlib = require('../../../testlib.js');

describe('Xvnc', function() {
  describe('constructor', testlib.describeProxyConstructor(Xvnc));
  describe('object', testlib.describeProxyUppableAndable(Xvnc));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xvnc, 'screenshot'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xvnc, 'xauthority'));
});
