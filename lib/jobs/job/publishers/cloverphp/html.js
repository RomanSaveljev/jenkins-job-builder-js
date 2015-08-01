'use strict';
var util$890 = require('../../../../misc/util.js');
var Html$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Html$892.prototype.up = function () {
    return this.upper;
};
Html$892.prototype.and = Html$892.prototype.up;
module.exports = Html$892;
Html$892.prototype[util$890.camelize('dir')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'dir',
        value$897
    ]);
};
Html$892.prototype[util$890.camelize('archive')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'archive',
        value$898
    ]);
};