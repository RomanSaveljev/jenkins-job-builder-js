var should = require('should');
var Tfs = require('../../../../lib/jobs/job/scm/tfs.js');
var testlib = require('../../../testlib.js');
var WebAccess = require('../../../../lib/jobs/job/scm/tfs/web-access.js');

describe('Tfs', function() {
  describe('constructor', testlib.describeProxyConstructor(Tfs));
  describe('object', testlib.describeProxyUppableAndable(Tfs));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tfs, 'server-url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tfs, 'project-path'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tfs, 'login'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tfs, 'use-update'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tfs, 'local-path'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Tfs, 'workspace'));
  describe('properties', testlib.describeProxyObjectArrayProperty(Tfs, 'web-access', WebAccess));
});
