'use strict';
var util$890 = require('../../../../misc/util.js');
var Type$891 = require('./type.js');
var Types$893 = function (upper$909, array$910) {
    this.upper = upper$909;
    this.array = array$910;
};
Types$893.prototype.up = function () {
    return this.upper;
};
Types$893.prototype.and = Types$893.prototype.up;
module.exports = Types$893;
Types$893.prototype[util$890.camelize('aunit')] = function (value$911) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'aunit',
        Type$891,
        value$911
    ]);
};
Types$893.prototype[util$890.camelize('boosttest')] = function (value$912) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'boosttest',
        Type$891,
        value$912
    ]);
};
Types$893.prototype[util$890.camelize('checktype')] = function (value$913) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'checktype',
        Type$891,
        value$913
    ]);
};
Types$893.prototype[util$890.camelize('cpptest')] = function (value$914) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'cpptest',
        Type$891,
        value$914
    ]);
};
Types$893.prototype[util$890.camelize('cppunit')] = function (value$915) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'cppunit',
        Type$891,
        value$915
    ]);
};
Types$893.prototype[util$890.camelize('ctest')] = function (value$916) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ctest',
        Type$891,
        value$916
    ]);
};
Types$893.prototype[util$890.camelize('embunit')] = function (value$917) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'embunit',
        Type$891,
        value$917
    ]);
};
Types$893.prototype[util$890.camelize('fpcunit')] = function (value$918) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'fpcunit',
        Type$891,
        value$918
    ]);
};
Types$893.prototype[util$890.camelize('junit')] = function (value$919) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'junit',
        Type$891,
        value$919
    ]);
};
Types$893.prototype[util$890.camelize('mstest')] = function (value$920) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'mstest',
        Type$891,
        value$920
    ]);
};
Types$893.prototype[util$890.camelize('nunit')] = function (value$921) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'nunit',
        Type$891,
        value$921
    ]);
};
Types$893.prototype[util$890.camelize('phpunit')] = function (value$922) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'phpunit',
        Type$891,
        value$922
    ]);
};
Types$893.prototype[util$890.camelize('tusar')] = function (value$923) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'tusar',
        Type$891,
        value$923
    ]);
};
Types$893.prototype[util$890.camelize('unittest')] = function (value$924) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'unittest',
        Type$891,
        value$924
    ]);
};
Types$893.prototype[util$890.camelize('valgrind')] = function (value$925) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'valgrind',
        Type$891,
        value$925
    ]);
};