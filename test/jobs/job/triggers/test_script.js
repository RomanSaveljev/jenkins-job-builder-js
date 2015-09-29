var should = require('should');
var Script = require('../../../../lib/jobs/job/triggers/script.js');
var testlib = require('../../../testlib.js');

describe('Script', function() {
  describe('constructor', testlib.describeProxyConstructor(Script));
  describe('object', testlib.describeProxyUppableAndable(Script));
  describe('properties', testlib.describeProxyPrimitiveProperty(Script, 'label'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Script, 'script'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Script, 'cron'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Script, 'enable-concurrent'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Script, 'exit-code'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Script, 'script-file-path'));
});
