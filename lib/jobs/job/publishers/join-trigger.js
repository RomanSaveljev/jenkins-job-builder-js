'use strict';
var util$890 = require('../../../misc/util.js');
var JoinTrigger$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
JoinTrigger$892.prototype.up = function () {
    return this.upper;
};
JoinTrigger$892.prototype.and = JoinTrigger$892.prototype.up;
module.exports = JoinTrigger$892;
JoinTrigger$892.prototype[util$890.camelize('projects')] = function (value$896) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'projects',
        value$896
    ]);
};