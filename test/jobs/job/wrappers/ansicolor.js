var should = require('should');
var Ansicolor = require('../../../../lib/jobs/job/wrappers/ansicolor.js');
var testlib = require('../../../testlib.js');

describe('Ansicolor', function() {
  describe('constructor', testlib.describeProxyConstructor(Ansicolor));
  describe('object', testlib.describeProxyUppableAndable(Ansicolor));
  describe('properties', testlib.describeObjectProxyProperty(Ansicolor, 'colormap'));
});
