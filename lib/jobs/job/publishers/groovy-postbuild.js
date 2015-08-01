'use strict';
var util$890 = require('../../../misc/util.js');
var GroovyPostbuild$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
GroovyPostbuild$892.prototype.up = function () {
    return this.upper;
};
GroovyPostbuild$892.prototype.and = GroovyPostbuild$892.prototype.up;
module.exports = GroovyPostbuild$892;
GroovyPostbuild$892.prototype[util$890.camelize('script')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'script',
        value$900
    ]);
};
GroovyPostbuild$892.prototype[util$890.camelize('classpath')] = function (value$901) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'classpath',
        value$901
    ]);
};
GroovyPostbuild$892.prototype[util$890.camelize('on-failure')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'on-failure',
        value$902
    ]);
};
GroovyPostbuild$892.prototype[util$890.camelize('matrix-parent')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'matrix-parent',
        value$903
    ]);
};
GroovyPostbuild$892.prototype[util$890.camelize('sandbox')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'sandbox',
        value$904
    ]);
};