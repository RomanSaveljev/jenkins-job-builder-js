var should = require('should');
var Pundle = require('../../../../../lib/jobs/job/scm/store/pundle.js');
var testlib = require('../../../../testlib.js');

describe('Pundle', function() {
  describe('constructor', testlib.describeProxyConstructor(Pundle));
  describe('object', testlib.describeProxyUppableAndable(Pundle));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pundle, 'package'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pundle, 'bundle'));
});
