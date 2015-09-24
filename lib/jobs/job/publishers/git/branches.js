'use strict';
var util$915 = require('../../../../misc/util.js');
var Branch$916 = require('./branch.js');
var Branches$918 = function (upper$920, array$921) {
    this.upper = upper$920;
    this.array = array$921;
};
Branches$918.prototype.up = function () {
    return this.upper;
};
Branches$918.prototype.and = Branches$918.prototype.up;
module.exports = Branches$918;
Branches$918.prototype[util$915.camelize('branch')] = function (value$922) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'branch',
        Branch$916,
        value$922
    ]);
};