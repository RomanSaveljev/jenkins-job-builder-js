var should = require('should');
var Warnings = require('../../../../lib/jobs/job/publishers/warnings.js');
var testlib = require('../../../testlib.js');
var NewThresholds = require('../../../../lib/jobs/job/publishers/warnings/new-thresholds.js');
var TotalThresholds = require('../../../../lib/jobs/job/publishers/warnings/total-thresholds.js');
var WorkspaceFileScanner = require('../../../../lib/jobs/job/publishers/warnings/workspace-file-scanner.js');

describe('Warnings', function() {
  describe('constructor', testlib.describeProxyConstructor(Warnings));
  describe('object', testlib.describeProxyUppableAndable(Warnings));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Warnings, 'console-log-parsers'));
  describe('properties', testlib.describeProxyObjectArrayProperty(Warnings, 'workspace-file-scanners', WorkspaceFileScanner));
  describe('properties', testlib.describeProxyPrimitiveProperty(Warnings, 'files-to-include'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Warnings, 'files-to-ignore'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Warnings, 'run-always'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Warnings, 'detect-modules'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Warnings, 'resolve-relative-paths'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Warnings, 'health-threshold-high'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Warnings, 'health-threshold-low'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Warnings, 'health-priorities'));
  describe('properties', testlib.describeProxyObjectProperty(Warnings, 'total-thresholds', TotalThresholds));
  describe('properties', testlib.describeProxyObjectProperty(Warnings, 'new-thresholds', NewThresholds));
  describe('properties', testlib.describeProxyPrimitiveProperty(Warnings, 'use-delta-for-new-warnings'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Warnings, 'only-use-stable-builds-as-reference'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Warnings, 'default-encoding'));
});
