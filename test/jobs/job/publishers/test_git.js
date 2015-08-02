var should = require('should');
var Git = require('../../../../lib/jobs/job/publishers/git.js');
var testlib = require('../../../testlib.js');
var Tags = require('../../../../lib/jobs/job/publishers/git/tags.js');
var Branches = require('../../../../lib/jobs/job/publishers/git/branches.js');
var Notes = require('../../../../lib/jobs/job/publishers/git/notes.js');

describe('Git', function() {
  describe('constructor', testlib.describeProxyConstructor(Git));
  describe('object', testlib.describeProxyUppableAndable(Git));
  describe('properties', testlib.describeProxyPrimitiveProperty(Git, 'push-merge'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Git, 'push-only-if-success'));
  describe('properties', testlib.describeProxyCustomArrayProperty(Git, 'tags', Tags));
  describe('properties', testlib.describeProxyCustomArrayProperty(Git, 'branches', Branches));
  describe('properties', testlib.describeProxyCustomArrayProperty(Git, 'notes', Notes));
});
