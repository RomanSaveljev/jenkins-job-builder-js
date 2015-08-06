var should = require('should');
var Metadata = require('../../../lib/jobs/job/metadata.js');
var testlib = require('../../testlib.js');
var Date = require('../../../lib/jobs/job/metadata/date.js');
var Primitive = require('../../../lib/jobs/job/metadata/primitive.js');

describe('Metadata', function() {
  describe('constructor', testlib.describeProxyConstructor(Metadata));
  describe('object', testlib.describeProxyUppableAndable(Metadata));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Metadata, 'date', Date));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Metadata, 'number', Primitive));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Metadata, 'string', Primitive));
});
