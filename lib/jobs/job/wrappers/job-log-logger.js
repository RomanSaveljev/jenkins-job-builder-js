'use strict';
var util$890 = require('../../../misc/util.js');
var JobLogLogger$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
JobLogLogger$892.prototype.up = function () {
    return this.upper;
};
JobLogLogger$892.prototype.and = JobLogLogger$892.prototype.up;
module.exports = JobLogLogger$892;
JobLogLogger$892.prototype[util$890.camelize('suppress-empty')] = function (value$896) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'suppress-empty',
        value$896
    ]);
};