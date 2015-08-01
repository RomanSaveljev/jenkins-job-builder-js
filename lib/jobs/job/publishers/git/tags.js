'use strict';
var util$890 = require('../../../../misc/util.js');
var Tag$891 = require('./tag.js');
var Tags$893 = function (upper$895, array$896) {
    this.upper = upper$895;
    this.array = array$896;
};
Tags$893.prototype.up = function () {
    return this.upper;
};
Tags$893.prototype.and = Tags$893.prototype.up;
module.exports = Tags$893;
Tags$893.prototype[util$890.camelize('tag')] = function (value$897) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'tag',
        Tag$891,
        value$897
    ]);
};