var should = require('should');
var AndroidEmulator = require('../../../../lib/jobs/job/wrappers/android-emulator.js');
var HardwareProperties = require('../../../../lib/jobs/job/wrappers/android-emulator/hardware-properties.js');
var testlib = require('../../../testlib.js');

describe('AndroidEmulator', function() {
  describe('constructor', testlib.describeProxyConstructor(AndroidEmulator));
  describe('object', testlib.describeProxyUppableAndable(AndroidEmulator));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'avd'));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'os'));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'screen-density'));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'screen-resolution'));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'locale'));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'target-abi'));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'sd-card'));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'wipe'));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'show-window'));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'snapshot'));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'delete'));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'startup-delay'));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'commandline-options'));
  describe('properties', testlib.describeProxyPrimitiveProperty(AndroidEmulator, 'exe'));
  describe('properties', testlib.describeProxyObjectProperty(AndroidEmulator, 'hardware-properties', HardwareProperties));
});
