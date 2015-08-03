var should = require('should');
var Remote = require('../../../../../lib/jobs/job/scm/git/remote.js');
var testlib = require('../../../../testlib.js');

describe('Remote', function() {
  describe('constructor', testlib.describeProxyConstructor(Remote));
  describe('object', testlib.describeProxyUppableAndable(Remote));
  describe('properties', testlib.describeProxyPrimitiveProperty(Remote, 'url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Remote, 'refspec'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Remote, 'credentials-id'));
});
