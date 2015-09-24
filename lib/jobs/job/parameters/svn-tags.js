'use strict';
var util$915 = require('../../../misc/util.js');
var SvnTags$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
SvnTags$917.prototype.up = function () {
    return this.upper;
};
SvnTags$917.prototype.and = SvnTags$917.prototype.up;
module.exports = SvnTags$917;
SvnTags$917.prototype[util$915.camelize('name')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$925
    ]);
};
SvnTags$917.prototype[util$915.camelize('default')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'default',
        value$926
    ]);
};
SvnTags$917.prototype[util$915.camelize('description')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'description',
        value$927
    ]);
};
SvnTags$917.prototype[util$915.camelize('url')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'url',
        value$928
    ]);
};
SvnTags$917.prototype[util$915.camelize('filter')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'filter',
        value$929
    ]);
};