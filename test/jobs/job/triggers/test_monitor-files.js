var should = require('should');
var MonitorFiles = require('../../../../lib/jobs/job/triggers/monitor-files.js');
var File = require('../../../../lib/jobs/job/triggers/monitor-files/file.js');
var testlib = require('../../../testlib.js');

describe('MonitorFiles', function() {
  describe('constructor', testlib.describeProxyConstructor(MonitorFiles));
  describe('object', testlib.describeProxyUppableAndable(MonitorFiles));
  describe('properties', testlib.describeProxyPrimitiveProperty(MonitorFiles, 'cron'));
  describe('properties', testlib.describeProxyObjectArrayProperty(MonitorFiles, 'files', File));
});
