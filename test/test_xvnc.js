var should = require('should');
var Inject = require('../lib/wrappers/inject.js');
var testlib = require('./testlib.js');

describe('Xvnc', function() {
  describe('constructor', testlib.describeObjectProxyConstructor(Inject));
  describe('object', testlib.describeObjectProxyUppableAndable(Inject));
  describe('screenshot', testlib.describeObjectProxyProperty(Inject, 'screenshot', 'screenshot'));
  describe('xauthority', testlib.describeObjectProxyProperty(Inject, 'xauthority', 'xauthority'));
});
