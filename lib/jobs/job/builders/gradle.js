'use strict';
var util$890 = require('../../../misc/util.js');
var Gradle$892 = function (upper$900, obj$901) {
    this.upper = upper$900;
    this.obj = obj$901;
};
Gradle$892.prototype.up = function () {
    return this.upper;
};
Gradle$892.prototype.and = Gradle$892.prototype.up;
module.exports = Gradle$892;
Gradle$892.prototype[util$890.camelize('tasks')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'tasks',
        value$902
    ]);
};
Gradle$892.prototype[util$890.camelize('gradle-name')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'gradle-name',
        value$903
    ]);
};
Gradle$892.prototype[util$890.camelize('wrapper')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'wrapper',
        value$904
    ]);
};
Gradle$892.prototype[util$890.camelize('executable')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'executable',
        value$905
    ]);
};
Gradle$892.prototype[util$890.camelize('switches')] = function (value$906) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'switches',
        value$906
    ]);
};
Gradle$892.prototype[util$890.camelize('use-root-dir')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'use-root-dir',
        value$907
    ]);
};
Gradle$892.prototype[util$890.camelize('root-build-script-dir')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'root-build-script-dir',
        value$908
    ]);
};