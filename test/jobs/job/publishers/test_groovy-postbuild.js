var should = require('should');
var GroovyPostbuild = require('../../../../lib/jobs/job/publishers/groovy-postbuild.js');
var testlib = require('../../../testlib.js');

describe('GroovyPostbuild', function() {
  describe('constructor', testlib.describeProxyConstructor(GroovyPostbuild));
  describe('object', testlib.describeProxyUppableAndable(GroovyPostbuild));
  describe('properties', testlib.describeProxyPrimitiveProperty(GroovyPostbuild, 'script'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(GroovyPostbuild, 'classpath'));
  describe('properties', testlib.describeProxyPrimitiveProperty(GroovyPostbuild, 'on-failure'));
  describe('properties', testlib.describeProxyPrimitiveProperty(GroovyPostbuild, 'matrix-parent'));
  describe('properties', testlib.describeProxyPrimitiveProperty(GroovyPostbuild, 'sandbox'));
});
