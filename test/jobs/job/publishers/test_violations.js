var should = require('should');
var Violations = require('../../../../lib/jobs/job/publishers/violations.js');
var testlib = require('../../../testlib.js');
var System = require('../../../../lib/jobs/job/publishers/violations/system.js');

describe('Violations', function() {
  describe('constructor', testlib.describeProxyConstructor(Violations));
  describe('object', testlib.describeProxyUppableAndable(Violations));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'checkstyle', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'codenarc', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'cpd', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'cpplint', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'csslint', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'findbugs', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'fxcop', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'gendarme', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'jcreport', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'jslint', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'pep8', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'perlcritic', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'pmd', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'pylint', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'simian', System));
  describe('properties', testlib.describeProxyObjectProperty(Violations, 'stylecop', System));
});
