var should = require('should');
var PathIgnore = require('../../../../lib/jobs/job/wrappers/pathignore.js');
var testlib = require('../../../testlib.js');

describe('PathIgnore', function() {
  describe('constructor', testlib.describeProxyConstructor(PathIgnore));
  describe('object', testlib.describeProxyUppableAndable(PathIgnore));
  describe('properties', testlib.describeProxyPrimitiveProperty(PathIgnore, 'ignored'));
});
