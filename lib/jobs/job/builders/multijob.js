'use strict';
var util$890 = require('../../../misc/util.js');
var Project$892 = require('./multijob/project.js');
var Multijob$893 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
Multijob$893.prototype.up = function () {
    return this.upper;
};
Multijob$893.prototype.and = Multijob$893.prototype.up;
module.exports = Multijob$893;
Multijob$893.prototype[util$890.camelize('name')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$899
    ]);
};
Multijob$893.prototype[util$890.camelize('condition')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'condition',
        value$900
    ]);
};
Multijob$893.prototype[util$890.camelize('projects')] = function (value$901) {
    return util$890.objectArrayAccessor.apply(this, [
        'projects',
        Project$892,
        value$901
    ]);
};