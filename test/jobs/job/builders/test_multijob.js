var should = require('should');
var MultiJob = require('../../../../lib/jobs/job/builders/multijob.js');
var testlib = require('../../../testlib.js');
var Project = require('../../../../lib/jobs/job/builders/multijob/project.js');

describe('MultiJob', function() {
  describe('constructor', testlib.describeProxyConstructor(MultiJob));
  describe('object', testlib.describeProxyUppableAndable(MultiJob));
  describe('properties', testlib.describeProxyPrimitiveProperty(MultiJob, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MultiJob, 'condition'));
  describe('properties', testlib.describeProxyObjectArrayProperty(MultiJob, 'projects', Project));
});
