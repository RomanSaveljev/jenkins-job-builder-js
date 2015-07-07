var should = require('should');
var Xvnc = require('../../lib/wrappers/xvnc.js');
var testlib = require('../testlib.js');

describe('Xvnc', function() {
  describe('constructor', testlib.describeProxyConstructor(Xvnc));
  describe('object', testlib.describeProxyUppableAndable(Xvnc));
  describe('screenshot', testlib.describeObjectProxyProperty(Xvnc, 'screenshot', 'screenshot'));
  describe('xauthority', testlib.describeObjectProxyProperty(Xvnc, 'xauthority', 'xauthority'));
});
