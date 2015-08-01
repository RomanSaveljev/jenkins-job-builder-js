'use strict';
var util$890 = require('../../../../misc/util.js');
var Site$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
Site$892.prototype.up = function () {
    return this.upper;
};
Site$892.prototype.and = Site$892.prototype.up;
module.exports = Site$892;
Site$892.prototype[util$890.camelize('url')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'url',
        value$896
    ]);
};