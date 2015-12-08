var should = require('should');
var LogRotate = require('../../../lib/jobs/job/logrotate.js');
var testlib = require('../../testlib.js');

describe('LogRotate', function() {
  describe('constructor', testlib.describeProxyConstructor(LogRotate));
  describe('object', testlib.describeProxyUppableAndable(LogRotate));
  describe('properties', testlib.describeProxyPrimitiveProperty(LogRotate, 'daysToKeep'));
  describe('properties', testlib.describeProxyPrimitiveProperty(LogRotate, 'numToKeep'));
  describe('properties', testlib.describeProxyPrimitiveProperty(LogRotate, 'artifactDaysToKeep'));
  describe('properties', testlib.describeProxyPrimitiveProperty(LogRotate, 'artifactNumToKeep'));
});
