'use strict';
var util$915 = require('../../../../misc/util.js');
var Tag$916 = require('./tag.js');
var Tags$918 = function (upper$920, array$921) {
    this.upper = upper$920;
    this.array = array$921;
};
Tags$918.prototype.up = function () {
    return this.upper;
};
Tags$918.prototype.and = Tags$918.prototype.up;
module.exports = Tags$918;
Tags$918.prototype[util$915.camelize('tag')] = function (value$922) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'tag',
        Tag$916,
        value$922
    ]);
};