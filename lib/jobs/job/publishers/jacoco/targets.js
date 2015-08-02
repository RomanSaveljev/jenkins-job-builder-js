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
Targets$893.prototype[util$890.camelize('instruction')] = function (value$902) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'instruction',
        Target$891,
        value$902
    ]);
};
Targets$893.prototype[util$890.camelize('branch')] = function (value$903) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'branch',
        Target$891,
        value$903
    ]);
};
Targets$893.prototype[util$890.camelize('complexity')] = function (value$904) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'complexity',
        Target$891,
        value$904
    ]);
};
Targets$893.prototype[util$890.camelize('line')] = function (value$905) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'line',
        Target$891,
        value$905
    ]);
};
Targets$893.prototype[util$890.camelize('method')] = function (value$906) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'method',
        Target$891,
        value$906
    ]);
};
Targets$893.prototype[util$890.camelize('class')] = function (value$907) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'class',
        Target$891,
        value$907
    ]);
};