var should = require('should');
var Timeout = require('../../../../lib/jobs/job/wrappers/timeout.js');
var testlib = require('../../../testlib.js');

describe('Timeout', function() {
  describe('constructor', testlib.describeProxyConstructor(Timeout));
  describe('object', testlib.describeProxyUppableAndable(Timeout));
  describe('fail', testlib.describeProxyPrimitiveProperty(Timeout, 'fail'));
  describe('abort', testlib.describeProxyPrimitiveProperty(Timeout, 'abort'));
  describe('writeDescription', testlib.describeProxyPrimitiveProperty(Timeout, 'write-description'));
  describe('timeout', testlib.describeProxyPrimitiveProperty(Timeout, 'timeout'));
  describe('timeoutVar', testlib.describeProxyPrimitiveProperty(Timeout, 'timeout-var'));
  describe('type', testlib.describeProxyPrimitiveProperty(Timeout, 'type'));
  describe('elasticPercentage', testlib.describeProxyPrimitiveProperty(Timeout, 'elastic-percentage'));
  describe('elasticNumberBuilds', testlib.describeProxyPrimitiveProperty(Timeout, 'elastic-number-builds'));
  describe('elasticDefaultTimeout', testlib.describeProxyPrimitiveProperty(Timeout, 'elastic-default-timeout'));
});
