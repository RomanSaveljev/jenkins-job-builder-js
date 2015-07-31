var should = require('should');
var Xvfb = require('../../../../lib/jobs/job/wrappers/xvfb.js');
var testlib = require('../../../testlib.js');

describe('Xvfb', function() {
  describe('constructor', testlib.describeProxyConstructor(Xvfb));
  describe('object', testlib.describeProxyUppableAndable(Xvfb));
  describe('installationName', testlib.describeObjectProxyProperty(Xvfb, 'installationName', 'installation-name'));
  describe('autoDisplayName', testlib.describeObjectProxyProperty(Xvfb, 'autoDisplayName', 'auto-display-name'));
  describe('displayName', testlib.describeObjectProxyProperty(Xvfb, 'displayName', 'display-name'));
  describe('assignedLabels', testlib.describeObjectProxyProperty(Xvfb, 'assignedLabels', 'assigned-labels'));
  describe('parallelBuild', testlib.describeObjectProxyProperty(Xvfb, 'parallelBuild', 'parallel-build'));
  describe('timeout', testlib.describeObjectProxyProperty(Xvfb, 'timeout', 'timeout'));
  describe('screen', testlib.describeObjectProxyProperty(Xvfb, 'screen', 'screen'));
  describe('displayNameOffset', testlib.describeObjectProxyProperty(Xvfb, 'displayNameOffset', 'display-name-offset'));
  describe('additionalOptions', testlib.describeObjectProxyProperty(Xvfb, 'additionalOptions', 'additional-options'));
  describe('debug', testlib.describeObjectProxyProperty(Xvfb, 'debug', 'debug'));
  describe('shutdownWithBuild', testlib.describeObjectProxyProperty(Xvfb, 'shutdownWithBuild', 'shutdown-with-build'));
});
