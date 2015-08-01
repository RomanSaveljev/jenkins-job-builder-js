'use strict';
var util$890 = require('../../../../misc/util.js');
var ChangeLogAgainst$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
ChangeLogAgainst$892.prototype.up = function () {
    return this.upper;
};
ChangeLogAgainst$892.prototype.and = ChangeLogAgainst$892.prototype.up;
module.exports = ChangeLogAgainst$892;
ChangeLogAgainst$892.prototype[util$890.camelize('remote')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'remote',
        value$897
    ]);
};
ChangeLogAgainst$892.prototype[util$890.camelize('branch')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'branch',
        value$898
    ]);
};