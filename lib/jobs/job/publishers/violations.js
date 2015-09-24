'use strict';
var util$915 = require('../../../misc/util.js');
var System$916 = require('./violations/system.js');
var Violations$918 = function (upper$935, obj$936) {
    this.upper = upper$935;
    this.obj = obj$936;
};
Violations$918.prototype.up = function () {
    return this.upper;
};
Violations$918.prototype.and = Violations$918.prototype.up;
module.exports = Violations$918;
Violations$918.prototype[util$915.camelize('checkstyle')] = function (value$937) {
    return util$915.objectAccessor.apply(this, [
        'checkstyle',
        System$916,
        value$937
    ]);
};
Violations$918.prototype[util$915.camelize('codenarc')] = function (value$938) {
    return util$915.objectAccessor.apply(this, [
        'codenarc',
        System$916,
        value$938
    ]);
};
Violations$918.prototype[util$915.camelize('cpd')] = function (value$939) {
    return util$915.objectAccessor.apply(this, [
        'cpd',
        System$916,
        value$939
    ]);
};
Violations$918.prototype[util$915.camelize('cpplint')] = function (value$940) {
    return util$915.objectAccessor.apply(this, [
        'cpplint',
        System$916,
        value$940
    ]);
};
Violations$918.prototype[util$915.camelize('csslint')] = function (value$941) {
    return util$915.objectAccessor.apply(this, [
        'csslint',
        System$916,
        value$941
    ]);
};
Violations$918.prototype[util$915.camelize('findbugs')] = function (value$942) {
    return util$915.objectAccessor.apply(this, [
        'findbugs',
        System$916,
        value$942
    ]);
};
Violations$918.prototype[util$915.camelize('fxcop')] = function (value$943) {
    return util$915.objectAccessor.apply(this, [
        'fxcop',
        System$916,
        value$943
    ]);
};
Violations$918.prototype[util$915.camelize('gendarme')] = function (value$944) {
    return util$915.objectAccessor.apply(this, [
        'gendarme',
        System$916,
        value$944
    ]);
};
Violations$918.prototype[util$915.camelize('jcreport')] = function (value$945) {
    return util$915.objectAccessor.apply(this, [
        'jcreport',
        System$916,
        value$945
    ]);
};
Violations$918.prototype[util$915.camelize('jslint')] = function (value$946) {
    return util$915.objectAccessor.apply(this, [
        'jslint',
        System$916,
        value$946
    ]);
};
Violations$918.prototype[util$915.camelize('pep8')] = function (value$947) {
    return util$915.objectAccessor.apply(this, [
        'pep8',
        System$916,
        value$947
    ]);
};
Violations$918.prototype[util$915.camelize('perlcritic')] = function (value$948) {
    return util$915.objectAccessor.apply(this, [
        'perlcritic',
        System$916,
        value$948
    ]);
};
Violations$918.prototype[util$915.camelize('pmd')] = function (value$949) {
    return util$915.objectAccessor.apply(this, [
        'pmd',
        System$916,
        value$949
    ]);
};
Violations$918.prototype[util$915.camelize('pylint')] = function (value$950) {
    return util$915.objectAccessor.apply(this, [
        'pylint',
        System$916,
        value$950
    ]);
};
Violations$918.prototype[util$915.camelize('simian')] = function (value$951) {
    return util$915.objectAccessor.apply(this, [
        'simian',
        System$916,
        value$951
    ]);
};
Violations$918.prototype[util$915.camelize('stylecop')] = function (value$952) {
    return util$915.objectAccessor.apply(this, [
        'stylecop',
        System$916,
        value$952
    ]);
};