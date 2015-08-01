'use strict';
var util$890 = require('../../../../misc/util.js');
var WebAccess$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
WebAccess$892.prototype.up = function () {
    return this.upper;
};
WebAccess$892.prototype.and = WebAccess$892.prototype.up;
module.exports = WebAccess$892;
WebAccess$892.prototype[util$890.camelize('web-url')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'web-url',
        value$896
    ]);
};