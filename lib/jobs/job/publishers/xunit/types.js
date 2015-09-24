'use strict';
var util$915 = require('../../../../misc/util.js');
var Type$916 = require('./type.js');
var Types$918 = function (upper$934, array$935) {
    this.upper = upper$934;
    this.array = array$935;
};
Types$918.prototype.up = function () {
    return this.upper;
};
Types$918.prototype.and = Types$918.prototype.up;
module.exports = Types$918;
Types$918.prototype[util$915.camelize('aunit')] = function (value$936) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'aunit',
        Type$916,
        value$936
    ]);
};
Types$918.prototype[util$915.camelize('boosttest')] = function (value$937) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'boosttest',
        Type$916,
        value$937
    ]);
};
Types$918.prototype[util$915.camelize('checktype')] = function (value$938) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'checktype',
        Type$916,
        value$938
    ]);
};
Types$918.prototype[util$915.camelize('cpptest')] = function (value$939) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'cpptest',
        Type$916,
        value$939
    ]);
};
Types$918.prototype[util$915.camelize('cppunit')] = function (value$940) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'cppunit',
        Type$916,
        value$940
    ]);
};
Types$918.prototype[util$915.camelize('ctest')] = function (value$941) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'ctest',
        Type$916,
        value$941
    ]);
};
Types$918.prototype[util$915.camelize('embunit')] = function (value$942) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'embunit',
        Type$916,
        value$942
    ]);
};
Types$918.prototype[util$915.camelize('fpcunit')] = function (value$943) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'fpcunit',
        Type$916,
        value$943
    ]);
};
Types$918.prototype[util$915.camelize('junit')] = function (value$944) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'junit',
        Type$916,
        value$944
    ]);
};
Types$918.prototype[util$915.camelize('mstest')] = function (value$945) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'mstest',
        Type$916,
        value$945
    ]);
};
Types$918.prototype[util$915.camelize('nunit')] = function (value$946) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'nunit',
        Type$916,
        value$946
    ]);
};
Types$918.prototype[util$915.camelize('phpunit')] = function (value$947) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'phpunit',
        Type$916,
        value$947
    ]);
};
Types$918.prototype[util$915.camelize('tusar')] = function (value$948) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'tusar',
        Type$916,
        value$948
    ]);
};
Types$918.prototype[util$915.camelize('unittest')] = function (value$949) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'unittest',
        Type$916,
        value$949
    ]);
};
Types$918.prototype[util$915.camelize('valgrind')] = function (value$950) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'valgrind',
        Type$916,
        value$950
    ]);
};