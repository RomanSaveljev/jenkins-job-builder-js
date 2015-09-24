'use strict';
var util$915 = require('../../misc/util.js');
var DateObject$916 = require('./metadata/date.js');
var Primitive$917 = require('./metadata/primitive.js');
var Metadata$919 = function (upper$923, array$924) {
    this.upper = upper$923;
    this.array = array$924;
};
Metadata$919.prototype.up = function () {
    return this.upper;
};
Metadata$919.prototype.and = Metadata$919.prototype.up;
module.exports = Metadata$919;
Metadata$919.prototype[util$915.camelize('date')] = function (value$925) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'date',
        DateObject$916,
        value$925
    ]);
};
Metadata$919.prototype[util$915.camelize('number')] = function (value$926) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'number',
        Primitive$917,
        value$926
    ]);
};
Metadata$919.prototype[util$915.camelize('string')] = function (value$927) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'string',
        Primitive$917,
        value$927
    ]);
};