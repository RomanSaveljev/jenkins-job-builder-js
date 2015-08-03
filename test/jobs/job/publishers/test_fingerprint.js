var should = require('should');
var FingerPrint = require('../../../../lib/jobs/job/publishers/fingerprint.js');
var testlib = require('../../../testlib.js');

describe('FingerPrint', function() {
  describe('constructor', testlib.describeProxyConstructor(FingerPrint));
  describe('object', testlib.describeProxyUppableAndable(FingerPrint));
  describe('properties', testlib.describeProxyPrimitiveProperty(FingerPrint, 'files'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FingerPrint, 'record-artifacts'));
});
