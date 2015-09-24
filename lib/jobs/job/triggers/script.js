'use strict';
var util$915 = require('../../../misc/util.js');
var Script$917 = function (upper$924, obj$925) {
    this.upper = upper$924;
    this.obj = obj$925;
};
Script$917.prototype.up = function () {
    return this.upper;
};
Script$917.prototype.and = Script$917.prototype.up;
module.exports = Script$917;
Script$917.prototype[util$915.camelize('label')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'label',
        value$926
    ]);
};
Script$917.prototype[util$915.camelize('script')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'script',
        value$927
    ]);
};
Script$917.prototype[util$915.camelize('script-file-path')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'script-file-path',
        value$928
    ]);
};
Script$917.prototype[util$915.camelize('cron')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'cron',
        value$929
    ]);
};
Script$917.prototype[util$915.camelize('enable-concurrent')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'enable-concurrent',
        value$930
    ]);
};
Script$917.prototype[util$915.camelize('exit-code')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'exit-code',
        value$931
    ]);
};