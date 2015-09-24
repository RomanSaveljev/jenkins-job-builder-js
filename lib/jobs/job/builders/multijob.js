'use strict';
var util$915 = require('../../../misc/util.js');
var Project$917 = require('./multijob/project.js');
var Multijob$918 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
Multijob$918.prototype.up = function () {
    return this.upper;
};
Multijob$918.prototype.and = Multijob$918.prototype.up;
module.exports = Multijob$918;
Multijob$918.prototype[util$915.camelize('name')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$924
    ]);
};
Multijob$918.prototype[util$915.camelize('condition')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'condition',
        value$925
    ]);
};
Multijob$918.prototype[util$915.camelize('projects')] = function (value$926) {
    return util$915.objectArrayAccessor.apply(this, [
        'projects',
        Project$917,
        value$926
    ]);
};