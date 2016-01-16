var should = require('should');
var MonitorFolders = require('../../../../lib/jobs/job/triggers/monitor-folders.js');
var testlib = require('../../../testlib.js');

describe('MonitorFolders', function() {
  describe('constructor', testlib.describeProxyConstructor(MonitorFolders));
  describe('object', testlib.describeProxyUppableAndable(MonitorFolders));
  describe('properties', testlib.describeProxyPrimitiveProperty(MonitorFolders, 'path'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(MonitorFolders, 'includes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MonitorFolders, 'excludes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MonitorFolders, 'check-modification-date'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MonitorFolders, 'check-content'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MonitorFolders, 'check-fewer'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MonitorFolders, 'cron'));
});
