'use strict';
var util$890 = require('../../../../misc/util.js');
var Project$892 = function (upper$902, obj$903) {
    this.upper = upper$902;
    this.obj = obj$903;
};
Project$892.prototype.up = function () {
    return this.upper;
};
Project$892.prototype.and = Project$892.prototype.up;
module.exports = Project$892;
Project$892.prototype[util$890.camelize('name')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$904
    ]);
};
Project$892.prototype[util$890.camelize('current-parameters')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'current-parameters',
        value$905
    ]);
};
Project$892.prototype[util$890.camelize('node-label-name')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'node-label-name',
        value$906
    ]);
};
Project$892.prototype[util$890.camelize('node-label')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'node-label',
        value$907
    ]);
};
Project$892.prototype[util$890.camelize('git-revision')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'git-revision',
        value$908
    ]);
};
Project$892.prototype[util$890.camelize('property-file')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'property-file',
        value$909
    ]);
};
Project$892.prototype[util$890.camelize('predefined-parameters')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$910
    ]);
};
Project$892.prototype[util$890.camelize('enable-condition')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'enable-condition',
        value$911
    ]);
};
Project$892.prototype[util$890.camelize('kill-phase-on')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'kill-phase-on',
        value$912
    ]);
};