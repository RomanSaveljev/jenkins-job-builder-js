var should = require('should');
var Xvnc = require('../lib/wrappers/xvnc.js');
var testlib = require('./testlib.js');

describe('Xvnc', function() {
  describe('constructor', testlib.describeObjectProxyConstructor(Xvnc));
  describe('object', testlib.describeObjectProxyUppableAndable(Xvnc));
  describe('name', testlib.describeObjectProxyProperty(Inject, 'scriptContent', 'script-content'));
});
