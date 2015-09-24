'use strict';
var util$915 = require('../../../misc/util.js');
var M2RepositoryCleanup$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
M2RepositoryCleanup$917.prototype.up = function () {
    return this.upper;
};
M2RepositoryCleanup$917.prototype.and = M2RepositoryCleanup$917.prototype.up;
module.exports = M2RepositoryCleanup$917;
M2RepositoryCleanup$917.prototype[util$915.camelize('patterns')] = function (value$921) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'patterns',
        value$921
    ]);
};