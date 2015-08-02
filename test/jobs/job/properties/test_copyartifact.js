var should = require('should');
var CopyArtifact = require('../../../../lib/jobs/job/properties/copyartifact.js');
var testlib = require('../../../testlib.js');

describe('CopyArtifact', function() {
  describe('constructor', testlib.describeProxyConstructor(CopyArtifact));
  describe('object', testlib.describeProxyUppableAndable(CopyArtifact));
  describe('properties', testlib.describeProxyPrimitiveProperty(CopyArtifact, 'projects'));
});
