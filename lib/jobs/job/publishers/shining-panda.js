'use strict';
var util$890 = require('../../../misc/util.js');
var ShiningPanda$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
ShiningPanda$892.prototype.up = function () {
    return this.upper;
};
ShiningPanda$892.prototype.and = ShiningPanda$892.prototype.up;
module.exports = ShiningPanda$892;
ShiningPanda$892.prototype[util$890.camelize('html-reports-directory')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'html-reports-directory',
        value$896
    ]);
};