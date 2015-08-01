'use strict';
var util$890 = require('../../../misc/util.js');
var InjectOwnershipVariables$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
InjectOwnershipVariables$892.prototype.up = function () {
    return this.upper;
};
InjectOwnershipVariables$892.prototype.and = InjectOwnershipVariables$892.prototype.up;
module.exports = InjectOwnershipVariables$892;
InjectOwnershipVariables$892.prototype[util$890.camelize('job-variables')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'job-variables',
        value$897
    ]);
};
InjectOwnershipVariables$892.prototype[util$890.camelize('node-variables')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'node-variables',
        value$898
    ]);
};