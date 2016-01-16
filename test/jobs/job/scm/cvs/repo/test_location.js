var should = require('should');
var Location = require('../../../../../../lib/jobs/job/scm/cvs/repo/location.js');
var testlib = require('../../../../../testlib.js');
var Module = require('../../../../../../lib/jobs/job/scm/cvs/repo/module.js');

describe('Location', function() {
  describe('constructor', testlib.describeProxyConstructor(Location));
  describe('object', testlib.describeProxyUppableAndable(Location));
  describe('properties', testlib.describeProxyPrimitiveProperty(Location, 'type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Location, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Location, 'use-head'));
  describe('properties', testlib.describeProxyObjectArrayProperty(Location, 'modules', Module));
});
