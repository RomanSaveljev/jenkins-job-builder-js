'use strict';
var util$890 = require('../../../misc/util.js');
var Series$891 = require('./plot/series.js');
var Plot$893 = function (upper$905, obj$906) {
    this.upper = upper$905;
    this.obj = obj$906;
};
Plot$893.prototype.up = function () {
    return this.upper;
};
Plot$893.prototype.and = Plot$893.prototype.up;
module.exports = Plot$893;
Plot$893.prototype[util$890.camelize('title')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'title',
        value$907
    ]);
};
Plot$893.prototype[util$890.camelize('yaxis')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'yaxis',
        value$908
    ]);
};
Plot$893.prototype[util$890.camelize('group')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'group',
        value$909
    ]);
};
Plot$893.prototype[util$890.camelize('num-builds')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'num-builds',
        value$910
    ]);
};
Plot$893.prototype[util$890.camelize('style')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'style',
        value$911
    ]);
};
Plot$893.prototype[util$890.camelize('use-description')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'use-description',
        value$912
    ]);
};
Plot$893.prototype[util$890.camelize('exclude-zero-yaxis')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'exclude-zero-yaxis',
        value$913
    ]);
};
Plot$893.prototype[util$890.camelize('logarithmic-yaxis')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'logarithmic-yaxis',
        value$914
    ]);
};
Plot$893.prototype[util$890.camelize('keep-records')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'keep-records',
        value$915
    ]);
};
Plot$893.prototype[util$890.camelize('csv-file-name')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'csv-file-name',
        value$916
    ]);
};
Plot$893.prototype[util$890.camelize('series')] = function (value$917) {
    return util$890.objectArrayAccessor.apply(this, [
        'series',
        Series$891,
        value$917
    ]);
};