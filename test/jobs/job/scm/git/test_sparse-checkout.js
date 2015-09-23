var should = require('should');
var SparseCheckout = require('../../../../../lib/jobs/job/scm/git/sparse-checkout.js');
var testlib = require('../../../../testlib.js');

describe('Remote', function() {
  describe('constructor', testlib.describeProxyConstructor(SparseCheckout));
  describe('object', testlib.describeProxyUppableAndable(SparseCheckout));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(SparseCheckout, 'paths'));
});
