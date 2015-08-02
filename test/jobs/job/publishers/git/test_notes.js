var should = require('should');
var Notes = require('../../../../../lib/jobs/job/publishers/git/notes.js');
var testlib = require('../../../../testlib.js');
var Note = require('../../../../../lib/jobs/job/publishers/git/note.js');

describe('Notes', function() {
  describe('constructor', testlib.describeProxyConstructor(Notes));
  describe('object', testlib.describeProxyUppableAndable(Notes));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Notes, 'note', Note));
});
