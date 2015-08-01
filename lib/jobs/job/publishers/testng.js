'use strict';
var util$890 = require('../../../misc/util.js');
var TestNg$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
TestNg$892.prototype.up = function () {
    return this.upper;
};
TestNg$892.prototype.and = TestNg$892.prototype.up;
module.exports = TestNg$892;
TestNg$892.prototype[util$890.camelize('pattern')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'pattern',
        value$898
    ]);
};
TestNg$892.prototype[util$890.camelize('escape-test-description')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'escape-test-description',
        value$899
    ]);
};
TestNg$892.prototype[util$890.camelize('escape-exception-msg')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'escape-exception-msg',
        value$900
    ]);
};