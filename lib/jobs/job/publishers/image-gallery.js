"use strict";

var util = require('../util.js');

var ImageGallery = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ImageGallery.prototype, 'upper');
ImageGallery.prototype.galleryType = util.generatePrimitiveAccessor('obj', 'gallery-type');
ImageGallery.prototype.title = util.generatePrimitiveAccessor('obj', 'title');
ImageGallery.prototype.imageWidth = util.generatePrimitiveAccessor('obj', 'image-width');
ImageGallery.prototype.unstableIfNoArtifacts = util.generatePrimitiveAccessor('obj', 'unstable-if-no-artifacts');
ImageGallery.prototype.includes = util.generatePrimitiveAccessor('obj', 'includes');
ImageGallery.prototype.baseRootFolder = util.generatePrimitiveAccessor('obj', 'base-root-folder');
ImageGallery.prototype.imageInnerWidth = util.generatePrimitiveAccessor('obj', 'image-inner-width');

module.exports = ImageGallery;
