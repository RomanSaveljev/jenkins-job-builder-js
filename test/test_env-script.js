var should = require('should');
var EnvScript = require('../lib/wrappers/env-script.js');
var testlib = require('./testlib.js');

describe('EnvScript', function() {
  describe('constructor', testlib.describeProxyConstructor(EnvScript));
  describe('object', testlib.describeProxyUppableAndable(EnvScript));
  describe('properties', testlib.describeObjectProxyProperty(EnvScript, 'scriptContent', 'script-content'));
  describe('properties', testlib.describeObjectProxyProperty(EnvScript, 'onlyRunOnParent', 'only-run-on-parent'));
});
