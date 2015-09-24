'use strict';
var util$915 = require('../../../misc/util.js');
var ImageGallery$917 = function (upper$925, obj$926) {
    this.upper = upper$925;
    this.obj = obj$926;
};
ImageGallery$917.prototype.up = function () {
    return this.upper;
};
ImageGallery$917.prototype.and = ImageGallery$917.prototype.up;
module.exports = ImageGallery$917;
ImageGallery$917.prototype[util$915.camelize('gallery-type')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'gallery-type',
        value$927
    ]);
};
ImageGallery$917.prototype[util$915.camelize('title')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'title',
        value$928
    ]);
};
ImageGallery$917.prototype[util$915.camelize('image-width')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'image-width',
        value$929
    ]);
};
ImageGallery$917.prototype[util$915.camelize('unstable-if-no-artifacts')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable-if-no-artifacts',
        value$930
    ]);
};
ImageGallery$917.prototype[util$915.camelize('includes')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'includes',
        value$931
    ]);
};
ImageGallery$917.prototype[util$915.camelize('base-root-folder')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'base-root-folder',
        value$932
    ]);
};
ImageGallery$917.prototype[util$915.camelize('image-inner-width')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'image-inner-width',
        value$933
    ]);
};