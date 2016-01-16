var should = require('should');
var File = require('../../../../../lib/jobs/job/triggers/monitor-files/file.js');
var testlib = require('../../../../testlib.js');
var CheckContent = require('../../../../../lib/jobs/job/triggers/monitor-files/file/check-content.js');

describe('File', function() {
  describe('constructor', testlib.describeProxyConstructor(File));
  describe('object', testlib.describeProxyUppableAndable(File));
  describe('properties', testlib.describeProxyPrimitiveProperty(File, 'path'));
  describe('properties', testlib.describeProxyPrimitiveProperty(File, 'strategy'));
  describe('properties', testlib.describeProxyObjectArrayProperty(File, 'check-content', CheckContent));
  describe('properties', testlib.describeProxyPrimitiveProperty(File, 'ignore-modificaton-date'));
});
