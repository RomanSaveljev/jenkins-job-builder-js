var should = require('should');
var Topic = require('../../../../../../lib/jobs/job/triggers/gerrit/project/topic.js');
var testlib = require('../../../../../testlib.js');

describe('Topic', function() {
  describe('constructor', testlib.describeProxyConstructor(Topic));
  describe('object', testlib.describeProxyUppableAndable(Topic));
  describe('properties', testlib.describeProxyPrimitiveProperty(Topic, 'compare-type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Topic, 'pattern'));
});
