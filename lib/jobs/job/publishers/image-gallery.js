'use strict';
var util$890 = require('../../../misc/util.js');
var ImageGallery$892 = function (upper$900, obj$901) {
    this.upper = upper$900;
    this.obj = obj$901;
};
ImageGallery$892.prototype.up = function () {
    return this.upper;
};
ImageGallery$892.prototype.and = ImageGallery$892.prototype.up;
module.exports = ImageGallery$892;
ImageGallery$892.prototype[util$890.camelize('gallery-type')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'gallery-type',
        value$902
    ]);
};
ImageGallery$892.prototype[util$890.camelize('title')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'title',
        value$903
    ]);
};
ImageGallery$892.prototype[util$890.camelize('image-width')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'image-width',
        value$904
    ]);
};
ImageGallery$892.prototype[util$890.camelize('unstable-if-no-artifacts')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable-if-no-artifacts',
        value$905
    ]);
};
ImageGallery$892.prototype[util$890.camelize('includes')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'includes',
        value$906
    ]);
};
ImageGallery$892.prototype[util$890.camelize('base-root-folder')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'base-root-folder',
        value$907
    ]);
};
ImageGallery$892.prototype[util$890.camelize('image-inner-width')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'image-inner-width',
        value$908
    ]);
};