var should = require('should');
var Tags = require('../../../../../lib/jobs/job/publishers/git/tags.js');
var testlib = require('../../../../testlib.js');
var Tag = require('../../../../../lib/jobs/job/publishers/git/tag.js');

describe('Tags', function() {
  describe('constructor', testlib.describeProxyConstructor(Tags));
  describe('object', testlib.describeProxyUppableAndable(Tags));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Tags, 'tag', Tag));
});
