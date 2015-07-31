var should = require('should');
var Timeout = require('../../../../lib/jobs/job/wrappers/timeout.js');
var testlib = require('../../../testlib.js');

describe('Timeout', function() {
  describe('constructor', testlib.describeProxyConstructor(Timeout));
  describe('object', testlib.describeProxyUppableAndable(Timeout));
  describe('fail', testlib.describeObjectProxyProperty(Timeout, 'fail', 'fail'));
  describe('abort', testlib.describeObjectProxyProperty(Timeout, 'abort', 'abort'));
  describe('writeDescription', testlib.describeObjectProxyProperty(Timeout, 'writeDescription', 'write-description'));
  describe('timeout', testlib.describeObjectProxyProperty(Timeout, 'timeout', 'timeout'));
  describe('timeoutVar', testlib.describeObjectProxyProperty(Timeout, 'timeoutVar', 'timeout-var'));
  describe('type', testlib.describeObjectProxyProperty(Timeout, 'type', 'type'));
  describe('elasticPercentage', testlib.describeObjectProxyProperty(Timeout, 'elasticPercentage', 'elastic-percentage'));
  describe('elasticNumberBuilds', testlib.describeObjectProxyProperty(Timeout, 'elasticNumberBuilds', 'elastic-number-builds'));
  describe('elasticDefaultTimeout', testlib.describeObjectProxyProperty(Timeout, 'elasticDefaultTimeout', 'elastic-default-timeout'));
});
