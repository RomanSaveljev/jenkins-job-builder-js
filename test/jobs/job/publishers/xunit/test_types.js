var should = require('should');
var Types = require('../../../../../lib/jobs/job/publishers/xunit/types.js');
var testlib = require('../../../../testlib.js');
var Type = require('../../../../../lib/jobs/job/publishers/xunit/type.js');

describe('Types', function() {
  describe('constructor', testlib.describeProxyConstructor(Types));
  describe('object', testlib.describeProxyUppableAndable(Types));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'aunit', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'boosttest', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'checktype', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'cpptest', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'cppunit', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'ctest', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'embunit', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'fpcunit', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'junit', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'mstest', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'nunit', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'phpunit', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'tusar', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'unittest', Type));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Types, 'valgrind', Type));
});
