var should = require('should');
var MatrixCombinations = require('../../../../lib/jobs/job/parameters/matrix-combinations.js');
var testlib = require('../../../testlib.js');

describe('MatrixCombinations', function() {
  describe('constructor', testlib.describeProxyConstructor(MatrixCombinations));
  describe('object', testlib.describeProxyUppableAndable(MatrixCombinations));
  describe('properties', testlib.describeProxyPrimitiveProperty(MatrixCombinations, 'name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MatrixCombinations, 'description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MatrixCombinations, 'filter'));  
});
