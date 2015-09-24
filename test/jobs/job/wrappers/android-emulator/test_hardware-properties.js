var should = require('should');
var HardwareProperties = require('../../../../../lib/jobs/job/wrappers/android-emulator/hardware-properties.js');
var testlib = require('../../../../testlib.js');

describe('HardwareProperties', function() {
  describe('constructor', testlib.describeProxyConstructor(HardwareProperties));
  describe('object', testlib.describeProxyUppableAndable(HardwareProperties));
  describe('properties', testlib.describeProxyNamedPrimitiveProperty(HardwareProperties, 'define'));
});
