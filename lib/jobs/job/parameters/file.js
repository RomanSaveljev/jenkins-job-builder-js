'use strict';
var util$890 = require('../../../misc/util.js');
var File$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
File$892.prototype.up = function () {
    return this.upper;
};
File$892.prototype.and = File$892.prototype.up;
module.exports = File$892;
File$892.prototype[util$890.camelize('name')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$897
    ]);
};
File$892.prototype[util$890.camelize('description')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'description',
        value$898
    ]);
};