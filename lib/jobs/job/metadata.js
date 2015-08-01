'use strict';
var util$890 = require('../../misc/util.js');
var DateObject$891 = require('./metadata/date.js');
var Primitive$892 = require('./metadata/primitive.js');
var Metadata$894 = function (upper$898, array$899) {
    this.upper = upper$898;
    this.array = array$899;
};
Metadata$894.prototype.up = function () {
    return this.upper;
};
Metadata$894.prototype.and = Metadata$894.prototype.up;
module.exports = Metadata$894;
Metadata$894.prototype[util$890.camelize('date')] = function (value$900) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'date',
        DateObject$891,
        value$900
    ]);
};
Metadata$894.prototype[util$890.camelize('number')] = function (value$901) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'number',
        Primitive$892,
        value$901
    ]);
};
Metadata$894.prototype[util$890.camelize('string')] = function (value$902) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'string',
        Primitive$892,
        value$902
    ]);
};