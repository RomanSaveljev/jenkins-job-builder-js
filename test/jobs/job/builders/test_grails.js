var should = require('should');
var Grails = require('../../../../lib/jobs/job/builders/grails.js');
var testlib = require('../../../testlib.js');

describe('Grails', function() {
  describe('constructor', testlib.describeProxyConstructor(Grails));
  describe('object', testlib.describeProxyUppableAndable(Grails));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'use-wrapper'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'force-upgrade'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'non-interactive'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'targets'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'server-port'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'work-dir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'project-dir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'base-dir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'properties'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'plain-output'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'stack-trace'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'verbose'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Grails, 'refresh-dependencies'));
});
