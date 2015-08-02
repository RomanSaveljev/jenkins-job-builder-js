var should = require('should');
var Note = require('../../../../../lib/jobs/job/publishers/git/note.js');
var testlib = require('../../../../testlib.js');

describe('Note', function() {
  describe('constructor', testlib.describeProxyConstructor(Note));
  describe('object', testlib.describeProxyUppableAndable(Note));
  describe('properties', testlib.describeProxyPrimitiveProperty(Note, 'remote'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Note, 'message'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Note, 'namespace'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Note, 'replace-note'));
});
