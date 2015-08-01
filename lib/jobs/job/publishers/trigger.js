'use strict';
var util$890 = require('../../../misc/util.js');
var Trigger$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Trigger$892.prototype.up = function () {
    return this.upper;
};
Trigger$892.prototype.and = Trigger$892.prototype.up;
module.exports = Trigger$892;
Trigger$892.prototype[util$890.camelize('project')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'project',
        value$897
    ]);
};
Trigger$892.prototype[util$890.camelize('threshold')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'threshold',
        value$898
    ]);
};