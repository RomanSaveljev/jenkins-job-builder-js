'use strict';
var util$890 = require('../../../misc/util.js');
var BatchTasks$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
BatchTasks$892.prototype.up = function () {
    return this.upper;
};
BatchTasks$892.prototype.and = BatchTasks$892.prototype.up;
module.exports = BatchTasks$892;
BatchTasks$892.prototype[util$890.camelize('name')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$897
    ]);
};
BatchTasks$892.prototype[util$890.camelize('script')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'script',
        value$898
    ]);
};