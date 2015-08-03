var should = require('should');
var ImageGallery = require('../../../../lib/jobs/job/publishers/image-gallery.js');
var testlib = require('../../../testlib.js');

describe('ImageGallery', function() {
  describe('constructor', testlib.describeProxyConstructor(ImageGallery));
  describe('object', testlib.describeProxyUppableAndable(ImageGallery));
  describe('properties', testlib.describeProxyPrimitiveProperty(ImageGallery, 'gallery-type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ImageGallery, 'title'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ImageGallery, 'image-width'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ImageGallery, 'unstable-if-no-artifacts'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ImageGallery, 'includes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ImageGallery, 'base-root-folder'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ImageGallery, 'image-inner-width'));
});
