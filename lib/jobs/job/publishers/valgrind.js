'use strict';
var util$890 = require('../../../misc/util.js');
var Thresholds$891 = require('./valgrind/thresholds.js');
var Valgrind$893 = function (upper$900, obj$901) {
    this.upper = upper$900;
    this.obj = obj$901;
};
Valgrind$893.prototype.up = function () {
    return this.upper;
};
Valgrind$893.prototype.and = Valgrind$893.prototype.up;
module.exports = Valgrind$893;
Valgrind$893.prototype[util$890.camelize('pattern')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'pattern',
        value$902
    ]);
};
Valgrind$893.prototype[util$890.camelize('thresholds')] = function (value$903) {
    return util$890.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$891,
        value$903
    ]);
};
Valgrind$893.prototype[util$890.camelize('fail-no-reports')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-no-reports',
        value$904
    ]);
};
Valgrind$893.prototype[util$890.camelize('fail-invalid-reports')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-invalid-reports',
        value$905
    ]);
};
Valgrind$893.prototype[util$890.camelize('publish-if-aborted')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'publish-if-aborted',
        value$906
    ]);
};
Valgrind$893.prototype[util$890.camelize('publish-if-failed')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'publish-if-failed',
        value$907
    ]);
};