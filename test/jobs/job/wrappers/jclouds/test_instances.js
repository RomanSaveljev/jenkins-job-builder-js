var should = require('should');
var Instances = require('../../../../../lib/jobs/job/wrappers/jclouds/instances.js');
var testlib = require('../../../../testlib.js');

describe('Instances', function() {
  describe('constructor', testlib.describeProxyConstructor(Instances));
  describe('object', testlib.describeProxyUppableAndable(Instances));
});
