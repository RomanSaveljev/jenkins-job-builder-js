'use strict';
var util$890 = require('../../../../misc/util.js');
var Severity$891 = require('./thresholds/severity.js');
var Thresholds$893 = function (upper$899, obj$900) {
    this.upper = upper$899;
    this.obj = obj$900;
};
Thresholds$893.prototype.up = function () {
    return this.upper;
};
Thresholds$893.prototype.and = Thresholds$893.prototype.up;
module.exports = Thresholds$893;
Thresholds$893.prototype[util$890.camelize('unstable')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable',
        value$901
    ]);
};
Thresholds$893.prototype[util$890.camelize('new-unstable')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'new-unstable',
        value$902
    ]);
};
Thresholds$893.prototype[util$890.camelize('failure')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'failure',
        value$903
    ]);
};
Thresholds$893.prototype[util$890.camelize('new-failure')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'new-failure',
        value$904
    ]);
};
Thresholds$893.prototype[util$890.camelize('severity')] = function (value$905) {
    return util$890.objectAccessor.apply(this, [
        'severity',
        Severity$891,
        value$905
    ]);
};