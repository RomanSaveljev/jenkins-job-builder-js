'use strict';
var util$890 = require('../../../misc/util.js');
var Sonar$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
Sonar$892.prototype.up = function () {
    return this.upper;
};
Sonar$892.prototype.and = Sonar$892.prototype.up;
module.exports = Sonar$892;
Sonar$892.prototype[util$890.camelize('sonar-name')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'sonar-name',
        value$900
    ]);
};
Sonar$892.prototype[util$890.camelize('task')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'task',
        value$901
    ]);
};
Sonar$892.prototype[util$890.camelize('project')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'project',
        value$902
    ]);
};
Sonar$892.prototype[util$890.camelize('java-opts')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'java-opts',
        value$903
    ]);
};
Sonar$892.prototype[util$890.camelize('jdk')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'jdk',
        value$904
    ]);
};