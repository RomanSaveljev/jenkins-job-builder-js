var should = require('should');
var BuildName = require('../lib/wrappers/build-name.js');
var testlib = require('./testlib.js');

describe('BuildName', function() {
  describe('constructor', testlib.describeProxyConstructor(BuildName));
  describe('object', testlib.describeProxyUppableAndable(BuildName));
  describe('name', testlib.describeObjectProxyProperty(BuildName, 'name', 'name'));
});
