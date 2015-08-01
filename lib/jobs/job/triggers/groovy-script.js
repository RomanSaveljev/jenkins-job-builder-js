'use strict';
var util$890 = require('../../../misc/util.js');
var GroovyScript$892 = function (upper$900, obj$901) {
    this.upper = upper$900;
    this.obj = obj$901;
};
GroovyScript$892.prototype.up = function () {
    return this.upper;
};
GroovyScript$892.prototype.and = GroovyScript$892.prototype.up;
module.exports = GroovyScript$892;
GroovyScript$892.prototype[util$890.camelize('system-script')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'system-script',
        value$902
    ]);
};
GroovyScript$892.prototype[util$890.camelize('script')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'script',
        value$903
    ]);
};
GroovyScript$892.prototype[util$890.camelize('script-file-path')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'script-file-path',
        value$904
    ]);
};
GroovyScript$892.prototype[util$890.camelize('property-file-path')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'property-file-path',
        value$905
    ]);
};
GroovyScript$892.prototype[util$890.camelize('enable-concurrent')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'enable-concurrent',
        value$906
    ]);
};
GroovyScript$892.prototype[util$890.camelize('label')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'label',
        value$907
    ]);
};
GroovyScript$892.prototype[util$890.camelize('cron')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'cron',
        value$908
    ]);
};