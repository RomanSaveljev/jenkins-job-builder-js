'use strict';
var util$890 = require('../../../../misc/util.js');
var Target$891 = require('./target.js');
var Targets$893 = function (upper$900, array$901) {
    this.upper = upper$900;
    this.array = array$901;
};
Targets$893.prototype.up = function () {
    return this.upper;
};
Targets$893.prototype.and = Targets$893.prototype.up;
module.exports = Targets$893;
Targets$893.prototype[util$890.camelize('files')] = function (value$902) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'files',
        Target$891,
        value$902
    ]);
};
Targets$893.prototype[util$890.camelize('packages')] = function (value$903) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'packages',
        Target$891,
        value$903
    ]);
};
Targets$893.prototype[util$890.camelize('method')] = function (value$904) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'method',
        Target$891,
        value$904
    ]);
};
Targets$893.prototype[util$890.camelize('classes')] = function (value$905) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'classes',
        Target$891,
        value$905
    ]);
};
Targets$893.prototype[util$890.camelize('line')] = function (value$906) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'line',
        Target$891,
        value$906
    ]);
};
Targets$893.prototype[util$890.camelize('conditional')] = function (value$907) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'conditional',
        Target$891,
        value$907
    ]);
};