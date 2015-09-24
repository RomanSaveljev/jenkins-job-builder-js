'use strict';
var util$915 = require('../../../misc/util.js');
var GroovyPostbuild$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
GroovyPostbuild$917.prototype.up = function () {
    return this.upper;
};
GroovyPostbuild$917.prototype.and = GroovyPostbuild$917.prototype.up;
module.exports = GroovyPostbuild$917;
GroovyPostbuild$917.prototype[util$915.camelize('script')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'script',
        value$925
    ]);
};
GroovyPostbuild$917.prototype[util$915.camelize('classpath')] = function (value$926) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'classpath',
        value$926
    ]);
};
GroovyPostbuild$917.prototype[util$915.camelize('on-failure')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'on-failure',
        value$927
    ]);
};
GroovyPostbuild$917.prototype[util$915.camelize('matrix-parent')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'matrix-parent',
        value$928
    ]);
};
GroovyPostbuild$917.prototype[util$915.camelize('sandbox')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'sandbox',
        value$929
    ]);
};