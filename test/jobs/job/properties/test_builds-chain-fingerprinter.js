var should = require('should');
var BuildsChainFingerprinter = require('../../../../lib/jobs/job/properties/builds-chain-fingerprinter.js');
var testlib = require('../../../testlib.js');

describe('BuildsChainFingerprinter', function() {
  describe('constructor', testlib.describeProxyConstructor(BuildsChainFingerprinter));
  describe('object', testlib.describeProxyUppableAndable(BuildsChainFingerprinter));
  describe('properties', testlib.describeProxyPrimitiveProperty(BuildsChainFingerprinter, 'per-builds-chain'));
  describe('properties', testlib.describeProxyPrimitiveProperty(BuildsChainFingerprinter, 'per-job-chain'));
});
