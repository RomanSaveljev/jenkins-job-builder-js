'use strict';
var util$915 = require('../../../misc/util.js');
var LiveScreenshot$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
LiveScreenshot$917.prototype.up = function () {
    return this.upper;
};
LiveScreenshot$917.prototype.and = LiveScreenshot$917.prototype.up;
module.exports = LiveScreenshot$917;
LiveScreenshot$917.prototype[util$915.camelize('full-size')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'full-size',
        value$922
    ]);
};
LiveScreenshot$917.prototype[util$915.camelize('thumbnail')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'thumbnail',
        value$923
    ]);
};