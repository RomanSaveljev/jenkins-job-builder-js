var should = require('should');
var Reporters = require('../../../lib/jobs/job/reporters.js');
var testlib = require('../../testlib.js');
var Email = require('../../../lib/jobs/job/publishers/email.js');
var FindBugs = require('../../../lib/jobs/job/publishers/findbugs.js');

describe('Reporters', function() {
  describe('constructor', testlib.describeProxyConstructor(Reporters));
  describe('object', testlib.describeProxyUppableAndable(Reporters));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Reporters, 'email', Email));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Reporters, 'findbugs', FindBugs));
});
