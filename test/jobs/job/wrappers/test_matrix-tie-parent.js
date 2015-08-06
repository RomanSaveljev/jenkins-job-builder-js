var should = require('should');
var MatrixTieParent = require('../../../../lib/jobs/job/wrappers/matrix-tie-parent.js');
var testlib = require('../../../testlib.js');

describe('MatrixTieParent', function() {
  describe('constructor', testlib.describeProxyConstructor(MatrixTieParent));
  describe('object', testlib.describeProxyUppableAndable(MatrixTieParent));
  describe('properties', testlib.describeProxyPrimitiveProperty(MatrixTieParent, 'node'));
});
