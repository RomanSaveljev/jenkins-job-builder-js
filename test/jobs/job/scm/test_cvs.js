var should = require('should');
var Cvs = require('../../../../lib/jobs/job/scm/cvs.js');
var testlib = require('../../../testlib.js');
var Repo = require('../../../../lib/jobs/job/scm/cvs/repo.js');

describe('Cvs', function() {
  describe('constructor', testlib.describeProxyConstructor(Cvs));
  describe('object', testlib.describeProxyUppableAndable(Cvs));
  describe('properties', testlib.describeProxyObjectArrayProperty(Cvs, 'repos', Repo));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cvs, 'use-update'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cvs, 'prune-empty'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cvs, 'skip-changelog'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cvs, 'show-all-output'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cvs, 'clean-checkout'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cvs, 'clean-copy'));
});
