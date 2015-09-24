'use strict';
var util$915 = require('../../../misc/util.js');
var TestNg$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
TestNg$917.prototype.up = function () {
    return this.upper;
};
TestNg$917.prototype.and = TestNg$917.prototype.up;
module.exports = TestNg$917;
TestNg$917.prototype[util$915.camelize('pattern')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'pattern',
        value$923
    ]);
};
TestNg$917.prototype[util$915.camelize('escape-test-description')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'escape-test-description',
        value$924
    ]);
};
TestNg$917.prototype[util$915.camelize('escape-exception-msg')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'escape-exception-msg',
        value$925
    ]);
};