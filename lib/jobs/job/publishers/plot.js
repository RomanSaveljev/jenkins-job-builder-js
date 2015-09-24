'use strict';
var util$915 = require('../../../misc/util.js');
var Series$916 = require('./plot/series.js');
var Plot$918 = function (upper$930, obj$931) {
    this.upper = upper$930;
    this.obj = obj$931;
};
Plot$918.prototype.up = function () {
    return this.upper;
};
Plot$918.prototype.and = Plot$918.prototype.up;
module.exports = Plot$918;
Plot$918.prototype[util$915.camelize('title')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'title',
        value$932
    ]);
};
Plot$918.prototype[util$915.camelize('yaxis')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'yaxis',
        value$933
    ]);
};
Plot$918.prototype[util$915.camelize('group')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'group',
        value$934
    ]);
};
Plot$918.prototype[util$915.camelize('num-builds')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'num-builds',
        value$935
    ]);
};
Plot$918.prototype[util$915.camelize('style')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'style',
        value$936
    ]);
};
Plot$918.prototype[util$915.camelize('use-description')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'use-description',
        value$937
    ]);
};
Plot$918.prototype[util$915.camelize('exclude-zero-yaxis')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'exclude-zero-yaxis',
        value$938
    ]);
};
Plot$918.prototype[util$915.camelize('logarithmic-yaxis')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'logarithmic-yaxis',
        value$939
    ]);
};
Plot$918.prototype[util$915.camelize('keep-records')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'keep-records',
        value$940
    ]);
};
Plot$918.prototype[util$915.camelize('csv-file-name')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'csv-file-name',
        value$941
    ]);
};
Plot$918.prototype[util$915.camelize('series')] = function (value$942) {
    return util$915.objectArrayAccessor.apply(this, [
        'series',
        Series$916,
        value$942
    ]);
};