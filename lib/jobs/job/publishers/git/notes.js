'use strict';
var util$915 = require('../../../../misc/util.js');
var Note$916 = require('./note.js');
var Notes$918 = function (upper$920, array$921) {
    this.upper = upper$920;
    this.array = array$921;
};
Notes$918.prototype.up = function () {
    return this.upper;
};
Notes$918.prototype.and = Notes$918.prototype.up;
module.exports = Notes$918;
Notes$918.prototype[util$915.camelize('note')] = function (value$922) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'note',
        Note$916,
        value$922
    ]);
};