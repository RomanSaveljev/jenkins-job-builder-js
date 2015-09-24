'use strict';
var util$915 = require('../../../misc/util.js');
var Tap$917 = function (upper$925, obj$926) {
    this.upper = upper$925;
    this.obj = obj$926;
};
Tap$917.prototype.up = function () {
    return this.upper;
};
Tap$917.prototype.and = Tap$917.prototype.up;
module.exports = Tap$917;
Tap$917.prototype[util$915.camelize('results')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'results',
        value$927
    ]);
};
Tap$917.prototype[util$915.camelize('fail-if-no-results')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-if-no-results',
        value$928
    ]);
};
Tap$917.prototype[util$915.camelize('failed-tests-mark-build-as-failure')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'failed-tests-mark-build-as-failure',
        value$929
    ]);
};
Tap$917.prototype[util$915.camelize('output-tap-to-console')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'output-tap-to-console',
        value$930
    ]);
};
Tap$917.prototype[util$915.camelize('enable-subtests')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'enable-subtests',
        value$931
    ]);
};
Tap$917.prototype[util$915.camelize('discard-old-reports')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'discard-old-reports',
        value$932
    ]);
};
Tap$917.prototype[util$915.camelize('todo-is-failure')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'todo-is-failure',
        value$933
    ]);
};