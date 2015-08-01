'use strict';
var util$890 = require('../../../misc/util.js');
var RootModule$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
RootModule$892.prototype.up = function () {
    return this.upper;
};
RootModule$892.prototype.and = RootModule$892.prototype.up;
module.exports = RootModule$892;
RootModule$892.prototype[util$890.camelize('group-id')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'group-id',
        value$897
    ]);
};
RootModule$892.prototype[util$890.camelize('artifact-id')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'artifact-id',
        value$898
    ]);
};