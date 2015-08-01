'use strict';
var util$890 = require('../../../misc/util.js');
var System$891 = require('./violations/system.js');
var Violations$893 = function (upper$910, obj$911) {
    this.upper = upper$910;
    this.obj = obj$911;
};
Violations$893.prototype.up = function () {
    return this.upper;
};
Violations$893.prototype.and = Violations$893.prototype.up;
module.exports = Violations$893;
Violations$893.prototype[util$890.camelize('checkstyle')] = function (value$912) {
    return util$890.objectAccessor.apply(this, [
        'checkstyle',
        System$891,
        value$912
    ]);
};
Violations$893.prototype[util$890.camelize('codenarc')] = function (value$913) {
    return util$890.objectAccessor.apply(this, [
        'codenarc',
        System$891,
        value$913
    ]);
};
Violations$893.prototype[util$890.camelize('cpd')] = function (value$914) {
    return util$890.objectAccessor.apply(this, [
        'cpd',
        System$891,
        value$914
    ]);
};
Violations$893.prototype[util$890.camelize('cpplint')] = function (value$915) {
    return util$890.objectAccessor.apply(this, [
        'cpplint',
        System$891,
        value$915
    ]);
};
Violations$893.prototype[util$890.camelize('csslint')] = function (value$916) {
    return util$890.objectAccessor.apply(this, [
        'csslint',
        System$891,
        value$916
    ]);
};
Violations$893.prototype[util$890.camelize('findbugs')] = function (value$917) {
    return util$890.objectAccessor.apply(this, [
        'findbugs',
        System$891,
        value$917
    ]);
};
Violations$893.prototype[util$890.camelize('fxcop')] = function (value$918) {
    return util$890.objectAccessor.apply(this, [
        'fxcop',
        System$891,
        value$918
    ]);
};
Violations$893.prototype[util$890.camelize('gendarme')] = function (value$919) {
    return util$890.objectAccessor.apply(this, [
        'gendarme',
        System$891,
        value$919
    ]);
};
Violations$893.prototype[util$890.camelize('jcreport')] = function (value$920) {
    return util$890.objectAccessor.apply(this, [
        'jcreport',
        System$891,
        value$920
    ]);
};
Violations$893.prototype[util$890.camelize('jslint')] = function (value$921) {
    return util$890.objectAccessor.apply(this, [
        'jslint',
        System$891,
        value$921
    ]);
};
Violations$893.prototype[util$890.camelize('pep8')] = function (value$922) {
    return util$890.objectAccessor.apply(this, [
        'pep8',
        System$891,
        value$922
    ]);
};
Violations$893.prototype[util$890.camelize('perlcritic')] = function (value$923) {
    return util$890.objectAccessor.apply(this, [
        'perlcritic',
        System$891,
        value$923
    ]);
};
Violations$893.prototype[util$890.camelize('pmd')] = function (value$924) {
    return util$890.objectAccessor.apply(this, [
        'pmd',
        System$891,
        value$924
    ]);
};
Violations$893.prototype[util$890.camelize('pylint')] = function (value$925) {
    return util$890.objectAccessor.apply(this, [
        'pylint',
        System$891,
        value$925
    ]);
};
Violations$893.prototype[util$890.camelize('simian')] = function (value$926) {
    return util$890.objectAccessor.apply(this, [
        'simian',
        System$891,
        value$926
    ]);
};
Violations$893.prototype[util$890.camelize('stylecop')] = function (value$927) {
    return util$890.objectAccessor.apply(this, [
        'stylecop',
        System$891,
        value$927
    ]);
};