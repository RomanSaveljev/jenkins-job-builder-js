'use strict';
var util$890 = require('../../../misc/util.js');
var Pipeline$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Pipeline$892.prototype.up = function () {
    return this.upper;
};
Pipeline$892.prototype.and = Pipeline$892.prototype.up;
module.exports = Pipeline$892;
Pipeline$892.prototype[util$890.camelize('project')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'project',
        value$898
    ]);
};
Pipeline$892.prototype[util$890.camelize('predefined-parameters')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$899
    ]);
};
Pipeline$892.prototype[util$890.camelize('current-parameters')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'current-parameters',
        value$900
    ]);
};