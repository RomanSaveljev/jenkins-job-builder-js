'use strict';
var util$890 = require('../../../misc/util.js');
var Grails$892 = function (upper$907, obj$908) {
    this.upper = upper$907;
    this.obj = obj$908;
};
Grails$892.prototype.up = function () {
    return this.upper;
};
Grails$892.prototype.and = Grails$892.prototype.up;
module.exports = Grails$892;
Grails$892.prototype[util$890.camelize('use-wrapper')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'use-wrapper',
        value$909
    ]);
};
Grails$892.prototype[util$890.camelize('name')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$910
    ]);
};
Grails$892.prototype[util$890.camelize('force-upgrade')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'force-upgrade',
        value$911
    ]);
};
Grails$892.prototype[util$890.camelize('non-interactive')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'non-interactive',
        value$912
    ]);
};
Grails$892.prototype[util$890.camelize('targets')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'targets',
        value$913
    ]);
};
Grails$892.prototype[util$890.camelize('server-port')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'server-port',
        value$914
    ]);
};
Grails$892.prototype[util$890.camelize('work-dir')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'work-dir',
        value$915
    ]);
};
Grails$892.prototype[util$890.camelize('project-dir')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'project-dir',
        value$916
    ]);
};
Grails$892.prototype[util$890.camelize('base-dir')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'base-dir',
        value$917
    ]);
};
Grails$892.prototype[util$890.camelize('properties')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'properties',
        value$918
    ]);
};
Grails$892.prototype[util$890.camelize('plain-output')] = function (value$919) {
    return util$890.primitiveAccessor.apply(this, [
        'plain-output',
        value$919
    ]);
};
Grails$892.prototype[util$890.camelize('stack-trace')] = function (value$920) {
    return util$890.primitiveAccessor.apply(this, [
        'stack-trace',
        value$920
    ]);
};
Grails$892.prototype[util$890.camelize('verbose')] = function (value$921) {
    return util$890.primitiveAccessor.apply(this, [
        'verbose',
        value$921
    ]);
};
Grails$892.prototype[util$890.camelize('refresh-dependencies')] = function (value$922) {
    return util$890.primitiveAccessor.apply(this, [
        'refresh-dependencies',
        value$922
    ]);
};