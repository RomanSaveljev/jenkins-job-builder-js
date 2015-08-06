'use strict';
var util$890 = require('../../../misc/util.js');
var LiveScreenshot$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
LiveScreenshot$892.prototype.up = function () {
    return this.upper;
};
LiveScreenshot$892.prototype.and = LiveScreenshot$892.prototype.up;
module.exports = LiveScreenshot$892;
LiveScreenshot$892.prototype[util$890.camelize('full-size')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'full-size',
        value$897
    ]);
};
LiveScreenshot$892.prototype[util$890.camelize('thumbnail')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'thumbnail',
        value$898
    ]);
};