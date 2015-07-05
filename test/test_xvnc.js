var should = require('should');
var Xvnc = require('../lib/wrappers/xvnc.js');
var testlib = require('./testlib.js');

describe('Xvnc', function() {
  describe('constructor', testlib.describeObjectProxyConstructor(Xvnc));
  describe('object', testlib.describeObjectProxyUppableAndable(Xvnc));
  describe('screenshot', testlib.describeObjectProxyProperty(Xvnc, 'screenshot', 'screenshot'));
  describe('xauthority', testlib.describeObjectProxyProperty(Xvnc, 'xauthority', 'xauthority'));
});
