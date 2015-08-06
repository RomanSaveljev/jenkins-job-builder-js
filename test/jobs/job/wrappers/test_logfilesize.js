var should = require('should');
var LogFileSize = require('../../../../lib/jobs/job/wrappers/logfilesize.js');
var testlib = require('../../../testlib.js');

describe('LogFileSize', function() {
  describe('constructor', testlib.describeProxyConstructor(LogFileSize));
  describe('object', testlib.describeProxyUppableAndable(LogFileSize));
  describe('properties', testlib.describeProxyPrimitiveProperty(LogFileSize, 'set-own'));
  describe('properties', testlib.describeProxyPrimitiveProperty(LogFileSize, 'fail'));
  describe('properties', testlib.describeProxyPrimitiveProperty(LogFileSize, 'size'));
});
