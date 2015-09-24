'use strict';
var util$915 = require('../../../misc/util.js');
var Grails$917 = function (upper$932, obj$933) {
    this.upper = upper$932;
    this.obj = obj$933;
};
Grails$917.prototype.up = function () {
    return this.upper;
};
Grails$917.prototype.and = Grails$917.prototype.up;
module.exports = Grails$917;
Grails$917.prototype[util$915.camelize('use-wrapper')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'use-wrapper',
        value$934
    ]);
};
Grails$917.prototype[util$915.camelize('name')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$935
    ]);
};
Grails$917.prototype[util$915.camelize('force-upgrade')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'force-upgrade',
        value$936
    ]);
};
Grails$917.prototype[util$915.camelize('non-interactive')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'non-interactive',
        value$937
    ]);
};
Grails$917.prototype[util$915.camelize('targets')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'targets',
        value$938
    ]);
};
Grails$917.prototype[util$915.camelize('server-port')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'server-port',
        value$939
    ]);
};
Grails$917.prototype[util$915.camelize('work-dir')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'work-dir',
        value$940
    ]);
};
Grails$917.prototype[util$915.camelize('project-dir')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'project-dir',
        value$941
    ]);
};
Grails$917.prototype[util$915.camelize('base-dir')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'base-dir',
        value$942
    ]);
};
Grails$917.prototype[util$915.camelize('properties')] = function (value$943) {
    return util$915.primitiveAccessor.apply(this, [
        'properties',
        value$943
    ]);
};
Grails$917.prototype[util$915.camelize('plain-output')] = function (value$944) {
    return util$915.primitiveAccessor.apply(this, [
        'plain-output',
        value$944
    ]);
};
Grails$917.prototype[util$915.camelize('stack-trace')] = function (value$945) {
    return util$915.primitiveAccessor.apply(this, [
        'stack-trace',
        value$945
    ]);
};
Grails$917.prototype[util$915.camelize('verbose')] = function (value$946) {
    return util$915.primitiveAccessor.apply(this, [
        'verbose',
        value$946
    ]);
};
Grails$917.prototype[util$915.camelize('refresh-dependencies')] = function (value$947) {
    return util$915.primitiveAccessor.apply(this, [
        'refresh-dependencies',
        value$947
    ]);
};