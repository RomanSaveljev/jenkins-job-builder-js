var should = require('should');
var ShiningPanda = require('../../../../lib/jobs/job/publishers/shining-panda.js');
var testlib = require('../../../testlib.js');

describe('ShiningPanda', function() {
  describe('constructor', testlib.describeProxyConstructor(ShiningPanda));
  describe('object', testlib.describeProxyUppableAndable(ShiningPanda));
  describe('properties', testlib.describeProxyPrimitiveProperty(ShiningPanda, 'html-reports-directory'));
});
