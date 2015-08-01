'use strict';
var util$890 = require('../../../misc/util.js');
var PrioritySorter$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
PrioritySorter$892.prototype.up = function () {
    return this.upper;
};
PrioritySorter$892.prototype.and = PrioritySorter$892.prototype.up;
module.exports = PrioritySorter$892;
PrioritySorter$892.prototype[util$890.camelize('priority')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'priority',
        value$896
    ]);
};