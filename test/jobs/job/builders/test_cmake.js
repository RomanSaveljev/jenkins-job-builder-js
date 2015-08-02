var should = require('should');
var Cmake = require('../../../../lib/jobs/job/builders/cmake.js');
var testlib = require('../../../testlib.js');

describe('Cmake', function() {
  describe('constructor', testlib.describeProxyConstructor(Cmake));
  describe('object', testlib.describeProxyUppableAndable(Cmake));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cmake, 'source-dir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cmake, 'build-dir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cmake, 'install-dir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cmake, 'build-type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cmake, 'generator'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cmake, 'make-command'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cmake, 'install-command'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cmake, 'preload-script'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cmake, 'other-arguments'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cmake, 'custom-cmake-path'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cmake, 'clean-build-dir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Cmake, 'clean-install-dir'));
});
