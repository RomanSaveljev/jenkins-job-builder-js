'use strict';
var util$890 = require('../../../misc/util.js');
var DownstreamExt$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
DownstreamExt$892.prototype.up = function () {
    return this.upper;
};
DownstreamExt$892.prototype.and = DownstreamExt$892.prototype.up;
module.exports = DownstreamExt$892;
DownstreamExt$892.prototype[util$890.camelize('projects')] = function (value$900) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'projects',
        value$900
    ]);
};
DownstreamExt$892.prototype[util$890.camelize('comparison')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'comparison',
        value$901
    ]);
};
DownstreamExt$892.prototype[util$890.camelize('criteria')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'criteria',
        value$902
    ]);
};
DownstreamExt$892.prototype[util$890.camelize('only-on-scm-change')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'only-on-scm-change',
        value$903
    ]);
};
DownstreamExt$892.prototype[util$890.camelize('only-on-local-scm-change')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'only-on-local-scm-change',
        value$904
    ]);
};