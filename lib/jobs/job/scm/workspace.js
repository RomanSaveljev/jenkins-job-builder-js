'use strict';
var util$890 = require('../../../misc/util.js');
var Workspace$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Workspace$892.prototype.up = function () {
    return this.upper;
};
Workspace$892.prototype.and = Workspace$892.prototype.up;
module.exports = Workspace$892;
Workspace$892.prototype[util$890.camelize('parent-job')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'parent-job',
        value$897
    ]);
};
Workspace$892.prototype[util$890.camelize('criteria')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'criteria',
        value$898
    ]);
};