var should = require('should');
var Store = require('../../../../lib/jobs/job/scm/store.js');
var testlib = require('../../../testlib.js');
var Pundle = require('../../../../lib/jobs/job/scm/store/pundle.js');

describe('Store', function() {
  describe('constructor', testlib.describeProxyConstructor(Store));
  describe('object', testlib.describeProxyUppableAndable(Store));
  describe('properties', testlib.describeProxyPrimitiveProperty(Store, 'script'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Store, 'repository'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Store, 'version-regex'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Store, 'minimum-blessing'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Store, 'parcel-builder-file'));
  describe('properties', testlib.describeProxyObjectArrayProperty(Store, 'pundles', Pundle));
});
