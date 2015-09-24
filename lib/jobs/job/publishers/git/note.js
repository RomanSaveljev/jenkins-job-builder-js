'use strict';
var util$915 = require('../../../../misc/util.js');
var Note$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
Note$917.prototype.up = function () {
    return this.upper;
};
Note$917.prototype.and = Note$917.prototype.up;
module.exports = Note$917;
Note$917.prototype[util$915.camelize('remote')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'remote',
        value$924
    ]);
};
Note$917.prototype[util$915.camelize('message')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'message',
        value$925
    ]);
};
Note$917.prototype[util$915.camelize('namespace')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'namespace',
        value$926
    ]);
};
Note$917.prototype[util$915.camelize('replace-note')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'replace-note',
        value$927
    ]);
};