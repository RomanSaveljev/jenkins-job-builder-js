var should = require('should');
var Axes = require('../../../lib/jobs/job/axes.js');
var testlib = require('../../testlib.js');
var Axis = require('../../../lib/jobs/job/axes/axis.js');

describe('Axes', function() {
  describe('constructor', testlib.describeProxyConstructor(Axes));
  describe('object', testlib.describeProxyUppableAndable(Axes));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Axes, 'axis', Axis));
});
