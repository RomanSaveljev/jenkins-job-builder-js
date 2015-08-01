'use strict';
var util$890 = require('../../../misc/util.js');
var Tap$892 = function (upper$900, obj$901) {
    this.upper = upper$900;
    this.obj = obj$901;
};
Tap$892.prototype.up = function () {
    return this.upper;
};
Tap$892.prototype.and = Tap$892.prototype.up;
module.exports = Tap$892;
Tap$892.prototype[util$890.camelize('results')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'results',
        value$902
    ]);
};
Tap$892.prototype[util$890.camelize('fail-if-no-results')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-if-no-results',
        value$903
    ]);
};
Tap$892.prototype[util$890.camelize('failed-tests-mark-build-as-failure')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'failed-tests-mark-build-as-failure',
        value$904
    ]);
};
Tap$892.prototype[util$890.camelize('output-tap-to-console')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'output-tap-to-console',
        value$905
    ]);
};
Tap$892.prototype[util$890.camelize('enable-subtests')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'enable-subtests',
        value$906
    ]);
};
Tap$892.prototype[util$890.camelize('discard-old-reports')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'discard-old-reports',
        value$907
    ]);
};
Tap$892.prototype[util$890.camelize('todo-is-failure')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'todo-is-failure',
        value$908
    ]);
};