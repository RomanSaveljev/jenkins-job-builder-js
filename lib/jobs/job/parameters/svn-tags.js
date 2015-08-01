'use strict';
var util$890 = require('../../../misc/util.js');
var SvnTags$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
SvnTags$892.prototype.up = function () {
    return this.upper;
};
SvnTags$892.prototype.and = SvnTags$892.prototype.up;
module.exports = SvnTags$892;
SvnTags$892.prototype[util$890.camelize('name')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$900
    ]);
};
SvnTags$892.prototype[util$890.camelize('default')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'default',
        value$901
    ]);
};
SvnTags$892.prototype[util$890.camelize('description')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'description',
        value$902
    ]);
};
SvnTags$892.prototype[util$890.camelize('url')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'url',
        value$903
    ]);
};
SvnTags$892.prototype[util$890.camelize('filter')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'filter',
        value$904
    ]);
};