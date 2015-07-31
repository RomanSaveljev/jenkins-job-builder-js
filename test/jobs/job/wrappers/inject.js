var should = require('should');
var Inject = require('../../../../lib/jobs/job/wrappers/inject.js');
var testlib = require('../../../testlib.js');

describe('Inject', function() {
  describe('constructor', testlib.describeProxyConstructor(Inject));
  describe('object', testlib.describeProxyUppableAndable(Inject));
  describe('name', testlib.describeObjectProxyProperty(Inject, 'scriptContent', 'script-content'));
});
