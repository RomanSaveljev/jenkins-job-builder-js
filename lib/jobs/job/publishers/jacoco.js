'use strict';
var util$890 = require('../../../misc/util.js');
var Targets$891 = require('./jacoco/targets.js');
var Jacoco$893 = function (upper$901, obj$902) {
    this.upper = upper$901;
    this.obj = obj$902;
};
Jacoco$893.prototype.up = function () {
    return this.upper;
};
Jacoco$893.prototype.and = Jacoco$893.prototype.up;
module.exports = Jacoco$893;
Jacoco$893.prototype[util$890.camelize('exec-pattern')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'exec-pattern',
        value$903
    ]);
};
Jacoco$893.prototype[util$890.camelize('class-pattern')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'class-pattern',
        value$904
    ]);
};
Jacoco$893.prototype[util$890.camelize('source-pattern')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'source-pattern',
        value$905
    ]);
};
Jacoco$893.prototype[util$890.camelize('update-build-status')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'update-build-status',
        value$906
    ]);
};
Jacoco$893.prototype[util$890.camelize('inclusion-pattern')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'inclusion-pattern',
        value$907
    ]);
};
Jacoco$893.prototype[util$890.camelize('exclusion-pattern')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'exclusion-pattern',
        value$908
    ]);
};
Jacoco$893.prototype[util$890.camelize('targets')] = function (value$909) {
    return util$890.customArrayAccessor.apply(this, [
        'targets',
        Targets$891,
        value$909
    ]);
};