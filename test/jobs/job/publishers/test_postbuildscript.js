var should = require('should');
var PostbuildScript = require('../../../../lib/jobs/job/publishers/postbuildscript.js');
var testlib = require('../../../testlib.js');
var Builders = require('../../../../lib/jobs/job/builders.js');

describe('PostbuildScript', function() {
  describe('constructor', testlib.describeProxyConstructor(PostbuildScript));
  describe('object', testlib.describeProxyUppableAndable(PostbuildScript));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(PostbuildScript, 'generic-script'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(PostbuildScript, 'groovy-script'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(PostbuildScript, 'groovy'));
  describe('properties', testlib.describeProxyCustomArrayProperty(PostbuildScript, 'builders', Builders));
  //describe('properties', testlib.describeProxyPrimitiveProperty(PostbuildScript, 'onsuccess'));
  describe('properties', testlib.describeProxyPrimitiveProperty(PostbuildScript, 'script-only-if-succeeded'));
  //describe('properties', testlib.describeProxyPrimitiveProperty(PostbuildScript, 'onfailure'));
  describe('properties', testlib.describeProxyPrimitiveProperty(PostbuildScript, 'script-only-if-failed'));
  describe('properties', testlib.describeProxyPrimitiveProperty(PostbuildScript, 'execute-on'));
  describe('properties', testlib.describeProxyPrimitiveProperty(PostbuildScript, 'mark-unstable-if-failed'));
});
