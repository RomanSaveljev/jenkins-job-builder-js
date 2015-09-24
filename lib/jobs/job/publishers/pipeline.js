'use strict';
var util$915 = require('../../../misc/util.js');
var Pipeline$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Pipeline$917.prototype.up = function () {
    return this.upper;
};
Pipeline$917.prototype.and = Pipeline$917.prototype.up;
module.exports = Pipeline$917;
Pipeline$917.prototype[util$915.camelize('project')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'project',
        value$923
    ]);
};
Pipeline$917.prototype[util$915.camelize('predefined-parameters')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$924
    ]);
};
Pipeline$917.prototype[util$915.camelize('current-parameters')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'current-parameters',
        value$925
    ]);
};