var should = require('should');
var FilePath = require('../../../../../../lib/jobs/job/triggers/gerrit/project/file-path.js');
var testlib = require('../../../../../testlib.js');

describe('FilePath', function() {
  describe('constructor', testlib.describeProxyConstructor(FilePath));
  describe('object', testlib.describeProxyUppableAndable(FilePath));
  describe('properties', testlib.describeProxyPrimitiveProperty(FilePath, 'compare-type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FilePath, 'pattern'));
});
